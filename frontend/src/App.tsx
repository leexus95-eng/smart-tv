import { useEffect, useState } from "react";
import { Tv, LayoutDashboard, AppWindow, HardDrive, Settings, Wifi, ShieldCheck, RefreshCw, Monitor, AlertCircle } from "lucide-react";

const API = "/api";
type Device = { serial: string; state: string };
export default function App() {
  const [adb, setAdb] = useState<boolean | null>(null);
  const [devices, setDevices] = useState<Device[]>([]);
  const [error, setError] = useState("");
  async function refresh() {
    setError("");
    try {
      const status = await fetch(`${API}/adb/status`).then(r => r.json());
      setAdb(status.available);
      const result = await fetch(`${API}/devices`).then(r => r.json());
      setDevices(result.devices ?? []);
    } catch { setError("No se pudo contactar con el servicio local. Inicia el backend."); }
  }
  useEffect(() => { void refresh(); }, []);
  return <div className="shell">
    <aside className="sidebar">
      <div className="brand"><div className="brandIcon"><Tv /></div><div><b>SMART TV</b><small>MANAGER</small></div></div>
      <div className="navLabel">MENÚ PRINCIPAL</div>
      <a className="active"><LayoutDashboard size={18}/> Panel principal</a>
      <a><Monitor size={18}/> Mis televisores</a><a><AppWindow size={18}/> Aplicaciones</a>
      <a><HardDrive size={18}/> Almacenamiento</a><a><Settings size={18}/> Configuración</a>
      <div className="sideNote"><ShieldCheck size={18}/><span>Protección activa<br/><small>Las operaciones destructivas están deshabilitadas en esta versión.</small></span></div>
    </aside>
    <main>
      <header><div><span className="eyebrow">CENTRO DE CONTROL</span><h1>Panel principal</h1><p>Administra tu televisión desde un solo lugar.</p></div><button onClick={refresh}><RefreshCw size={16}/> Actualizar</button></header>
      {error && <div className="alert"><AlertCircle size={18}/>{error}</div>}
      <section className="hero"><div><span className="pill"><span className="dot"/> DISPOSITIVO POR CONFIGURAR</span><h2>Tu entretenimiento,<br/>bajo control.</h2><p>Conecta tu TCL compatible para consultar aplicaciones y almacenamiento.</p><button className="primary" onClick={refresh}><Wifi size={17}/> Comprobar conexión</button></div><div className="tvArt"><Tv size={112} strokeWidth={1}/><span>TCL · ANDROID / GOOGLE TV</span></div></section>
      <section className="stats">
        <article><div className="statIcon"><Tv/></div><span>TELEVISIÓN</span><strong>TCL</strong><small>Modelo aún no identificado</small></article>
        <article><div className="statIcon"><Wifi/></div><span>ESTADO ADB</span><strong>{adb === null ? "Comprobando" : adb ? "Disponible" : "No detectado"}</strong><small>{adb ? "Herramienta encontrada" : "Instala Android Platform Tools"}</small></article>
        <article><div className="statIcon"><AppWindow/></div><span>DISPOSITIVOS ADB</span><strong>{devices.length}</strong><small>{devices.length ? "Detectados por ADB" : "Aún no hay dispositivos"}</small></article>
        <article><div className="statIcon"><HardDrive/></div><span>ALMACENAMIENTO</span><strong>—</strong><small>Disponible tras conectar</small></article>
      </section>
      <section className="panel"><div className="panelHead"><div><h3>Conexión de dispositivos</h3><p>El servicio local consulta ADB; acepta la autorización en la pantalla de tu TV.</p></div><span className="tag">LECTURA INICIAL</span></div>
        {devices.length ? devices.map(d => <div className="device" key={d.serial}><Tv/><div><b>{d.serial}</b><small>Estado: {d.state}</small></div><span className="tag">{d.state}</span></div> : <div className="empty"><Wifi size={28}/><b>No hay televisores conectados</b><span>Cuando ADB esté configurado y autorizado, aparecerán aquí.</span></div>}
      </section>
      <footer>SMART TV MANAGER · Prototipo seguro · No se han ejecutado cambios en tu televisión.</footer>
    </main>
  </div>;
}
