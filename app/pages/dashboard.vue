<template>
  <div class="dashboard">
    <h2>Admin Dashboard</h2>
    <button @click="logout">Logout</button>

    <form @submit.prevent="handleSubmit">
      <input v-model="form.title" placeholder="Title" required />
      <input v-model="form.pricePerNight" type="number" placeholder="Price per Night" required />
      <input v-model="form.bedrooms" type="number" placeholder="Bedrooms" required />

      <!-- Hero Image Upload -->
      <label>Hero Image</label>
      <input type="file" accept="image/*" @change="changeHeroImage" style="display:none" ref="heroInput" />
      <div class="image-preview" v-if="form.mainImage">
        <img :src="form.mainImage" width="150" />
        <button type="button" @click="removeHero">🗑️</button>
        <label class="icon-btn">
          🔄
          <input type="file" accept="image/*" @change="changeHeroImage" style="display:none" />
        </label>
      </div>

      <!-- Gallery Images Upload -->
      <label>Gallery Images</label>
      <input type="file" @change="handleGalleryUpload" accept="image/*" multiple />
      <div v-if="form.imageGallery.length" class="gallery-strip">
        <div v-for="(img, idx) in form.imageGallery" :key="idx" class="thumb">
          <img :src="img" width="100" />
          <button type="button" @click="removeGallery(idx)">🗑️</button>
          <label class="icon-btn">
              🔄
            <input
              type="file"
              accept="image/*"
              @change="changeGalleryImage($event, idx)"
              style="display:none"
            />
          </label>
        </div>
      </div>

      <textarea v-model="form.description" placeholder="Description" required></textarea>
      <button type="submit">{{ form.id ? 'Update' : 'Create' }} Property</button>
      <button v-if="form.id" @click.prevent="resetForm">Cancel Edit</button>
    </form>

    <hr />

    <div v-for="property in properties" :key="property.id" class="property-card">
      <h3>{{ property.title }}</h3>
      <p>{{ property.pricePerNight }} / night - {{ property.bedrooms }} bedrooms</p>
      <img 
        :src="property.mainImage" 
        alt="Image" 
        width="200"
      />
      <!-- Gallery Strip -->
      <div
        v-if="property.imageGallery && property.imageGallery.length > 1"
        class="carousel"
      >
        <img
          v-for="img in property.imageGallery"
          :key="img"
          :src="img"
          alt="Gallery Thumbnail"
          width="100"
        />
      </div>
      <p>{{ property.description }}</p>
      <button @click="editProperty(property)">Edit</button>
      <button @click="deleteProperty(property.id)">Delete</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { db } from '../firebase';
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc
} from 'firebase/firestore';
import { getAuth, signOut } from 'firebase/auth';


const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/upload`;
const CLOUDINARY_UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

// Auth + fetch
const logout = async () => {
  const auth = getAuth();
  await signOut(auth);
  window.location.href = '/login';
};

const fetchProperties = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'properties'));
    properties.value = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (err) {
    console.error('Failed to load properties:', err);
  }
};

const properties = ref([]);
const form = ref({
  id: null,
  title: '',
  pricePerNight: '',
  bedrooms: '',
  description: '',
  mainImage: '',
  imageGallery: []
});

const pendingHeroFile = ref(null);
const pendingGalleryFiles = ref([]);

// Hero image upload + replace
const changeHeroImage = async (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const url = await uploadSingle(file);
  form.value.mainImage = url;
};

// Remove hero
const removeHero = () => {
  form.value.mainImage = '';
};

// Gallery handlers
const handleGalleryUpload = async (e) => {
  const files = Array.from(e.target.files);
  const urls = await Promise.all(files.map(uploadSingle));
  form.value.imageGallery.push(...urls);
};

const removeGallery = idx => {
  form.value.imageGallery.splice(idx, 1);
};

const changeGalleryImage = async (e, idx) => {
  const file = e.target.files[0];
  if (!file) return;
  const url = await uploadSingle(file);
  form.value.imageGallery.splice(idx, 1, url);
};

// Upload utils
const uploadSingle = async file => {
  const fd = new FormData();
  fd.append('file', file);
  fd.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
  const res = await axios.post(CLOUDINARY_URL, fd);
  return res.data.secure_url;
};

const uploadImagesToCloudinary = async () => {
  const urls = [];
  if (pendingHeroFile.value) {
    const heroUrl = await uploadSingle(pendingHeroFile.value);
    urls.push({ type: 'hero', url: heroUrl });
  }
  for (const file of pendingGalleryFiles.value) {
    const url = await uploadSingle(file);
    urls.push({ type: 'gallery', url });
  }
  return urls;
};

// Submit
const handleSubmit = async () => {
  const uploads = await uploadImagesToCloudinary();
  uploads.forEach(u => {
    if (u.type === 'hero') form.value.mainImage = u.url;
    else form.value.imageGallery.push(u.url);
  });

  const data = {
    title: form.value.title,
    pricePerNight: +form.value.pricePerNight,
    bedrooms: +form.value.bedrooms,
    description: form.value.description,
    mainImage: form.value.mainImage,
    imageGallery: form.value.imageGallery,
    createdAt: new Date()
  };

  if (form.value.id) {
    await updateDoc(doc(db, 'properties', form.value.id), data);
  } else {
    await addDoc(collection(db, 'properties'), data);
  }

  await fetchProperties();
  resetForm();
};

// Reset
const resetForm = () => {
  form.value = {
    id: null, title: '', pricePerNight: '', bedrooms: '',
    description: '', mainImage: '', imageGallery: []
  };
  pendingHeroFile.value = null;
  pendingGalleryFiles.value = [];
};

const deleteProperty = async id => {
  try {
    await deleteDoc(doc(db, 'properties', id));
    await fetchProperties();
  } catch (err) {
    console.error('Failed to delete:', err);
  }
};

const editProperty = property => {
  form.value = { ...property };
};

onMounted(fetchProperties);
</script>


<style scoped>
.dashboard {
  max-width: 800px;
  margin: 0 auto;
  padding: 1.5rem;
  font-family: sans-serif;
}

h2 {
  margin-bottom: 1rem;
}

button {
  cursor: pointer;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  background-color: #007bff;
  color: white;
  transition: background-color 0.2s ease;
}
button:hover {
  background-color: #0056b3;
}

form {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-bottom: 2rem;
}

label {
  font-weight: 600;
  margin-bottom: 0.25rem;
}

input[type="file"],
input[type="number"],
input[type="text"],
textarea {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

textarea {
  min-height: 80px;
  resize: vertical;
}

.image-preview,
.gallery-strip {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin: 0.5rem 0;
}

.image-preview img,
.thumb img {
  border-radius: 4px;
  object-fit: cover;
}

.image-preview button,
.thumb button {
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  line-height: 1;
  transition: background 0.2s ease;
}
.image-preview button:hover,
.thumb button:hover {
  background: rgba(0, 0, 0, 0.8);
}

.gallery-strip {
  margin-top: 0.5rem;
}

.thumb {
  position: relative;
}

.thumb button {
  position: absolute;
  top: 4px;
  right: 4px;
}

.property-card {
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 1rem;
  margin-bottom: 1.5rem;
  box-shadow: 2px 2px 8px rgba(0,0,0,0.05);
}

.property-card h3 {
  margin-top: 0;
}

.property-card img {
  display: block;
  margin: 0.5rem 0;
  border-radius: 4px;
}

.carousel {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

</style>

