export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white rounded-xl p-6 max-w-4xl w-full relative overflow-y-auto max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
        <button className="absolute top-4 right-4 text-gray-700 font-bold" onClick={onClose}>
          ×
        </button>
        <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
        <p className="mb-4 text-gray-700">{project.description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.images.map((img, i) => (
            <img key={i} src={img} alt={`${project.title} ${i + 1}`} className="w-full h-64 object-cover rounded-lg" />
          ))}
        </div>
      </div>
    </div>
  );
}
