// models/Project.js
import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  pro_name: { type: String, required: true },
  d1: { type: String },
  d2: { type: String },
  d3: { type: String },
  tech: [{ type: String }],
  details: { type: String },
  srt: { type: String },
  img: { type: String },
  code: { type: String },
  server: { type: String },
  live: { type: String }
}, {
  timestamps: true,
  collection: 'projects_data' 
});

const Project = mongoose.model('Project', projectSchema);

export default Project;
