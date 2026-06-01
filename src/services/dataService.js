import api from './api';

const dataService = {
  // Profile
  getProfile: async () => {
    const response = await api.get('/profile');
    return response.data;
  },

  getPublicProfile: async (adminId) => {
    const response = await api.get(`/profile/public/${adminId}`);
    return response.data;
  },

  updateProfile: async (profileData) => {
    const response = await api.post('/profile', profileData);
    return response.data;
  },

  // Skills
  getSkills: async () => {
    const response = await api.get('/skills');
    return response.data;
  },

  getFeaturedSkills: async () => {
    const response = await api.get('/skills/featured');
    return response.data;
  },

  getSkill: async (id) => {
    const response = await api.get(`/skills/${id}`);
    return response.data;
  },

  createSkill: async (skillData) => {
    const response = await api.post('/skills', skillData);
    return response.data;
  },

  updateSkill: async (id, skillData) => {
    const response = await api.put(`/skills/${id}`, skillData);
    return response.data;
  },

  deleteSkill: async (id) => {
    const response = await api.delete(`/skills/${id}`);
    return response.data;
  },

  // Projects
  getProjects: async () => {
    const response = await api.get('/projects');
    return response.data;
  },

  getFeaturedProjects: async () => {
    const response = await api.get('/projects/featured');
    return response.data;
  },

  getProject: async (id) => {
    const response = await api.get(`/projects/${id}`);
    return response.data;
  },

  createProject: async (projectData) => {
    const response = await api.post('/projects', projectData);
    return response.data;
  },

  updateProject: async (id, projectData) => {
    const response = await api.put(`/projects/${id}`, projectData);
    return response.data;
  },

  deleteProject: async (id) => {
    const response = await api.delete(`/projects/${id}`);
    return response.data;
  },

  // Experience
  getExperience: async () => {
    const response = await api.get('/experience');
    return response.data;
  },

  getExperienceItem: async (id) => {
    const response = await api.get(`/experience/${id}`);
    return response.data;
  },

  createExperience: async (experienceData) => {
    const response = await api.post('/experience', experienceData);
    return response.data;
  },

  updateExperience: async (id, experienceData) => {
    const response = await api.put(`/experience/${id}`, experienceData);
    return response.data;
  },

  deleteExperience: async (id) => {
    const response = await api.delete(`/experience/${id}`);
    return response.data;
  },

  // Education
  getEducation: async () => {
    const response = await api.get('/education');
    return response.data;
  },

  getEducationItem: async (id) => {
    const response = await api.get(`/education/${id}`);
    return response.data;
  },

  createEducation: async (educationData) => {
    const response = await api.post('/education', educationData);
    return response.data;
  },

  updateEducation: async (id, educationData) => {
    const response = await api.put(`/education/${id}`, educationData);
    return response.data;
  },

  deleteEducation: async (id) => {
    const response = await api.delete(`/education/${id}`);
    return response.data;
  },

  // Testimonials
  getTestimonials: async () => {
    const response = await api.get('/testimonials');
    return response.data;
  },

  getFeaturedTestimonials: async () => {
    const response = await api.get('/testimonials/featured');
    return response.data;
  },

  getTestimonial: async (id) => {
    const response = await api.get(`/testimonials/${id}`);
    return response.data;
  },

  createTestimonial: async (testimonialData) => {
    const response = await api.post('/testimonials', testimonialData);
    return response.data;
  },

  updateTestimonial: async (id, testimonialData) => {
    const response = await api.put(`/testimonials/${id}`, testimonialData);
    return response.data;
  },

  deleteTestimonial: async (id) => {
    const response = await api.delete(`/testimonials/${id}`);
    return response.data;
  },

  // Contact Messages
  getContactMessages: async () => {
    const response = await api.get('/contact');
    return response.data;
  },

  getUnreadCount: async () => {
    const response = await api.get('/contact/unread/count');
    return response.data;
  },

  getContactMessage: async (id) => {
    const response = await api.get(`/contact/${id}`);
    return response.data;
  },

  submitContactForm: async (messageData) => {
    const response = await api.post('/contact/submit', messageData);
    return response.data;
  },

  markAsRead: async (id) => {
    const response = await api.put(`/contact/${id}/read`);
    return response.data;
  },

  replyToMessage: async (id, replyData) => {
    const response = await api.put(`/contact/${id}/reply`, replyData);
    return response.data;
  },

  deleteContactMessage: async (id) => {
    const response = await api.delete(`/contact/${id}`);
    return response.data;
  },

  // Social Links
  getSocialLinks: async () => {
    const response = await api.get('/social-links');
    return response.data;
  },

  getSocialLink: async (id) => {
    const response = await api.get(`/social-links/${id}`);
    return response.data;
  },

  createSocialLink: async (linkData) => {
    const response = await api.post('/social-links', linkData);
    return response.data;
  },

  updateSocialLink: async (id, linkData) => {
    const response = await api.put(`/social-links/${id}`, linkData);
    return response.data;
  },

  deleteSocialLink: async (id) => {
    const response = await api.delete(`/social-links/${id}`);
    return response.data;
  },

  // Settings
  getSettings: async () => {
    const response = await api.get('/settings');
    return response.data;
  },

  getSetting: async (key) => {
    const response = await api.get(`/settings/${key}`);
    return response.data;
  },

  updateSetting: async (key, value) => {
    const response = await api.put(`/settings/${key}`, { setting_value: value });
    return response.data;
  },

  createSetting: async (settingData) => {
    const response = await api.post('/settings', settingData);
    return response.data;
  },

  deleteSetting: async (key) => {
    const response = await api.delete(`/settings/${key}`);
    return response.data;
  },
};

export default dataService;
