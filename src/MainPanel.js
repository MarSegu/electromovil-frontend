import React from 'react';

// Importar los estilos (si tienes archivos CSS personalizados)
//import './MainPanel.css';

function MainPanel() {
  const toggleProfilePanel = () => {
    const panel = document.getElementById('profilePanel');
    const overlay = document.getElementById('profileOverlay');

    panel.classList.toggle('show');
    overlay.classList.toggle('show');

    // Deshabilitar el scroll del body cuando el panel está abierto
    if (panel.classList.contains('show')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
        <div className="container">
          <a className="navbar-brand fw-bold text-primary" href="#">
            <i className="fas fa-tools me-2"></i>ElectroMovil
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item d-flex align-items-center">
                <span className="availability-label">Disponible</span>
                <div className="form-check form-switch">
                  <input className="form-check-input availability-toggle" type="checkbox" id="availabilitySwitch" checked />
                </div>
              </li>
              <li className="nav-item ms-3">
                <button onClick={toggleProfilePanel} className="btn btn-primary btn-sm">
                  <i className="fas fa-user me-1"></i> Perfil
                </button>
              </li>
              <li className="nav-item ms-3">
                <a href="../index.html" className="btn btn-danger btn-sm">
                  <i className="fas fa-sign-out-alt"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Panel de Perfil (oculto por defecto) */}
      <div className="profile-overlay" id="profileOverlay" onClick={toggleProfilePanel}></div>
      <div className="profile-panel" id="profilePanel">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="text-primary mb-0">
            <i className="fas fa-user-edit me-2"></i>Editar Perfil
          </h4>
          <button type="button" className="btn-close" onClick={toggleProfilePanel}></button>
        </div>

        {/* Formulario de perfil */}
        <form id="profileForm">
          <div className="mb-3 text-center">
            <img src="https://via.placeholder.com/150" className="rounded-circle mb-2" alt="Foto de perfil" width="100" />
            <button type="button" className="btn btn-sm btn-outline-primary">
              <i className="fas fa-camera me-1"></i>Cambiar foto
            </button>
          </div>

          {/* Inputs del perfil */}
          <div className="mb-3">
            <label htmlFor="profileName" className="form-label">Nombre Completo</label>
            <input type="text" className="form-control" id="profileName" value="Técnico Ejemplo" />
          </div>

          <div className="mb-3">
            <label htmlFor="profileEmail" className="form-label">Correo Electrónico</label>
            <input type="email" className="form-control" id="profileEmail" value="tecnico@electromovil.com" />
          </div>

          <div className="mb-3">
            <label htmlFor="profilePhone" className="form-label">Teléfono/Celular</label>
            <input type="tel" className="form-control" id="profilePhone" value="+57 300 123 4567" />
          </div>

          <div className="mb-3">
            <label className="form-label">Especialización</label>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="specialization1" checked />
              <label className="form-check-label" htmlFor="specialization1">Lavadoras</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="specialization2" checked />
              <label className="form-check-label" htmlFor="specialization2">Neveras</label>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="profileSchedule" className="form-label">Horario de Trabajo</label>
            <select className="form-select" id="profileSchedule">
              <option value="full">Tiempo completo (8am - 6pm)</option>
              <option value="morning">Mañanas (8am - 12pm)</option>
              <option value="afternoon">Tardes (1pm - 6pm)</option>
            </select>
          </div>

          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary">
              <i className="fas fa-save me-1"></i>Guardar Cambios
            </button>
            <button type="button" className="btn btn-outline-secondary" onClick={toggleProfilePanel}>
              Cancelar
            </button>
          </div>
        </form>
      </div>

      {/* Contenido Principal */}
      <div className="container pt-5 mt-5">
        {/* Header */}
        <section className="py-5 text-center">
          <h1 className="fw-bold text-primary mb-3">Panel del Técnico</h1>
          <p className="lead">Gestiona tus visitas, reporta avances y mantén actualizado tu perfil.</p>
        </section>

        {/* Filtros y Estadísticas Rápidas */}
        <section className="mb-5">
          <div className="row g-4">
            <div className="col-md-3">
              <div className="card bg-primary text-white">
                <div className="card-body text-center">
                  <h5 className="card-title">Pendientes</h5>
                  <h2 className="fw-bold" id="pendingCount">5</h2>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card bg-info text-white">
                <div className="card-body text-center">
                  <h5 className="card-title">En Progreso</h5>
                  <h2 className="fw-bold" id="inProgressCount">2</h2>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card bg-success text-white">
                <div className="card-body text-center">
                  <h5 className="card-title">Completadas</h5>
                  <h2 className="fw-bold" id="completedCount">12</h2>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card bg-warning text-dark">
                <div className="card-body text-center">
                  <h5 className="card-title">Repuestos</h5>
                  <h2 className="fw-bold" id="partsCount">3</h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Visitas Asignadas con Filtros */}
        {/* Aquí también puedes implementar la tabla de visitas y demás secciones... */}
      </div>

      {/* Modal Detalle de Orden */}
      {/* Este modal se implementaría de manera similar usando React y JSX */}
    </div>
  );
}

export default MainPanel;
