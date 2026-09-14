import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Package, 
  PackagePlus, 
  Users, 
  Search, 
  Bell, 
  Menu, 
  Barcode, 
  AlertTriangle, 
  MoreVertical,
  Plus,
  Edit,
  Trash2,
  Check,
  X,
  ArrowRightLeft,
  ClipboardList,
  FileText,
  ShieldAlert,
  CheckCircle,
  XCircle,
  TrendingUp,
  TrendingDown,
  UserCircle
} from 'lucide-react';

// Paleta de colores
const colors = {
  darkTeal: '#285260',
  mediumTeal: '#548C92',
  lightTeal: '#B4D7D8',
  beige: '#E0D7CF',
  brown: '#AB9072'
};

// Datos Iniciales
const initialProducts = [
  { id: 1, name: 'Broca HSS 3/8', category: 'Herramientas', stock: 10, barcode: '001', price: 16.00, minStock: 5 },
  { id: 2, name: 'Broca HSS 7/64', category: 'Herramientas', stock: 10, barcode: '002', price: 3.00, minStock: 5 },
  { id: 3, name: 'Broca HSS 1/8', category: 'Herramientas', stock: 20, barcode: '003', price: 3.00, minStock: 5 },
  { id: 4, name: 'Broca HSS 5/32', category: 'Herramientas', stock: 10, barcode: '004', price: 3.00, minStock: 5 },
  { id: 5, name: 'Broca HSS 5/16', category: 'Herramientas', stock: 10, barcode: '005', price: 12.00, minStock: 5 },
  { id: 6, name: 'Broca P/CONCRETO 3/16 X4', category: 'Herramientas', stock: 10, barcode: '006', price: 3.00, minStock: 5 },
  { id: 7, name: 'Broca HSS 1/4', category: 'Herramientas', stock: 10, barcode: '007', price: 7.00, minStock: 5 },
  { id: 8, name: 'Broca P/CONCRETO 3/8 X5', category: 'Herramientas', stock: 10, barcode: '008', price: 5.00, minStock: 5 },
  { id: 9, name: 'Extension 4 Tomas Gris 10M', category: 'Electricidad', stock: 4, barcode: '009', price: 18.00, minStock: 2 },
  { id: 10, name: 'Extension 4 Tomas Gris 5M', category: 'Electricidad', stock: 4, barcode: '010', price: 11.00, minStock: 2 },
  { id: 11, name: 'Plancha Empastar Lisa M/Goma 11 "x5"', category: 'Construccion', stock: 12, barcode: '011', price: 12.00, minStock: 8 },
  { id: 12, name: 'Extension 4 Tomas Gris 3M', category: 'Electricidad', stock: 4, barcode: '012', price: 9.00, minStock: 2 },
  { id: 13, name: 'Plancha Empastar Dentada M/Goma 11"x5"', category: 'Construccion', stock: 12, barcode: '013', price: 12.00, minStock: 6 },
  { id: 14, name: 'Martillo Uña M/Madera 20 ONZ', category: 'Herramientas', stock: 6, barcode: '014', price: 16.00, minStock: 2 },
  { id: 15, name: 'Cinta Masking 2 X30YDS', category: 'Limpieza', stock: 30, barcode: '015', price: 6.00, minStock: 15 },
  { id: 16, name: 'Espatula M/Madera 4"(12)', category: 'Herramientas', stock: 12, barcode: '016', price: 4.00, minStock: 2 },
  { id: 17, name: 'Cinta Masking 1 "x 30YDS KNAUFF', category: 'Limpieza', stock: 30, barcode: '017', price: 4.00, minStock: 3 },
  { id: 18, name: 'Silicona Multiusos transp 225ML KNAUFF', category: 'Limpieza', stock: 12, barcode: '018', price: 8.00, minStock: 2 },
  { id: 19, name: 'Silicona Multiusos transp 50GR KNAUFF', category: 'Limpieza', stock: 12, barcode: '019', price: 3.00, minStock: 3 },
  { id: 20, name: 'Silicona Multiusos transp 225ML KNAUFF', category: 'Limpieza', stock: 12, barcode: '020', price: 8.00, minStock: 2 },
  { id: 21, name: 'Silicona Lavanda 450ML-KNAUFF', category: 'Limpieza', stock: 12, barcode: '021', price: 9.00, minStock: 2 },
  { id: 22, name: 'Pegamento extrafuerte 30GR SOLDIMIX', category: 'Quimicos', stock: 12, barcode: '022', price: 11.00, minStock: 4 },
  { id: 23, name: 'Pegamento 10 MINUTOS 30GR SOLDIMIX', category: 'Quimicos', stock: 12, barcode: '023', price: 11.00, minStock: 4 },
  { id: 24, name: 'Pintura spray gris #84 400ML', category: 'Spray', stock: 12, barcode: '024', price: 5.00, minStock: 4 },
  { id: 25, name: 'Pintura spray rojo oscuro', category: 'Spray', stock: 12, barcode: '025', price: 5.00, minStock: 4 },
  { id: 26, name: 'Pintura spray dorado #25 400ML', category: 'Spray', stock: 12, barcode: '026', price: 7.00, minStock: 4 },
  { id: 27, name: 'Pintura spray rojo brillante #311 400ML', category: 'Spray', stock: 12, barcode: '027', price: 5.00, minStock: 4 },
  { id: 28, name: 'Pintura spray silver #36 400ML', category: 'Spray', stock: 24, barcode: '028', price: 5.00, minStock: 4 },
  { id: 29, name: 'Pintura spray negro mate #12 400ML', category: 'Spray', stock: 24, barcode: '029', price: 5.00, minStock: 4 },
  { id: 30, name: 'Pintura spray negro brillante #11 400ML', category: 'Spray', stock: 24, barcode: '030', price: 5.00, minStock: 4 },
  { id: 31, name: 'Brocha de Nylon 1/2"(12)', category: 'Brochas', stock: 12, barcode: '031', price: 1.00, minStock: 4 },
  { id: 32, name: 'Brocha de Nylon 1"(12)', category: 'Brochas', stock: 12, barcode: '032', price: 2.00, minStock: 4 },
  { id: 33, name: 'Brocha de Nylon 1 1/2"(12)', category: 'Brochas', stock: 12, barcode: '033', price: 2.00, minStock: 4 },
  { id: 34, name: 'Brocha de Nylon 3"(12)', category: 'Brochas', stock: 12, barcode: '034', price: 5.00, minStock: 4 },
  { id: 35, name: 'Brocha de Nylon 2"(12)', category: 'Brochas', stock: 12, barcode: '035', price: 3.00, minStock: 4 },
  { id: 36, name: 'Brocha de Nylon 4"(12)', category: 'Brochas', stock: 12, barcode: '036', price: 6.00, minStock: 4 },
  { id: 37, name: 'Esmalte Sintetico Tamsa Bayo 1/4 Gal', category: 'Pinturas', stock: 2, barcode: '037', price: 12.00, minStock: 1 },
  { id: 38, name: 'Esmalte Sintetico Tamsa Celeste 1/4 Gal', category: 'Pinturas', stock: 2, barcode: '038', price: 12.00, minStock: 1 },
  { id: 39, name: 'Esmalte Sintetico Tamsa Negro 1/4 Gal', category: 'Pinturas', stock: 2, barcode: '039', price: 12.00, minStock: 1 },
  { id: 40, name: 'Barniz Sintetico Jhomeron Caoba 1/4 Gal', category: 'Pinturas', stock: 2, barcode: '040', price: 16.00, minStock: 1 },
  { id: 41, name: 'Barniz Sintetico Jhomeron Cedro 1/4 Gal', category: 'Pinturas', stock: 1, barcode: '041', price: 16.00, minStock: 1 },
  { id: 42, name: 'Masilla Plastica Toque Flex x 5Kg Lata', category: 'Pinturas', stock: 2, barcode: '042', price: 73.00, minStock: 1 },
  { id: 43, name: 'Esmalte Sintetico Amarillo Ocre x 1 Gal', category: 'Pinturas', stock: 2, barcode: '043', price: 38.00, minStock: 1 },
  { id: 44, name: 'Esmalte Sintetico Azul Naval x 1 Gal', category: 'Pinturas', stock: 1, barcode: '044', price: 38.00, minStock: 1 },
  { id: 45, name: 'Latex Tamsa Color Blanco x 1 Gl Balde', category: 'Pinturas', stock: 12, barcode: '045', price: 18.00, minStock: 5 },
  { id: 46, name: 'Base Zincromato Color Industrial x 1/4 Gl', category: 'Pinturas', stock: 4, barcode: '046', price: 13.00, minStock: 1 },
  { id: 47, name: 'disco copa 4"', category: 'PVC', stock: 15, barcode: '047', price: 16.00, minStock: 3 },
  { id: 48, name: 'majestad 25kg (5 litros x bolsa)', category: 'PVC', stock: 10, barcode: '048', price: 32.00, minStock: 2 },
  { id: 49, name: 'codo 1/2"', category: 'PVC', stock: 50, barcode: '049', price: 2.00, minStock: 10 },
  { id: 50, name: 'tapon 1/2"', category: 'PVC', stock: 40, barcode: '050', price: 1.00, minStock: 10 },
  { id: 51, name: 'cpp satinado 1gl blanco', category: 'Pinturas', stock: 5, barcode: '051', price: 98.00, minStock: 1 },
  { id: 52, name: 'trampa 4" eco', category: 'PVC', stock: 8, barcode: '052', price: 25.00, minStock: 2 },
  { id: 53, name: 'tubo 1/2" nicol', category: 'PVC', stock: 30, barcode: '053', price: 22.00, minStock: 5 },
  { id: 54, name: 'adaptador 3/4" - 1/2"', category: 'PVC', stock: 20, barcode: '054', price: 3.50, minStock: 5 },
  { id: 55, name: 'adaptadores n.', category: 'PVC', stock: 25, barcode: '055', price: 2.00, minStock: 5 },
  { id: 56, name: 'tee 1/2" nicol', category: 'PVC', stock: 35, barcode: '056', price: 3.00, minStock: 8 },
  { id: 57, name: 'check 1/2"', category: 'PVC', stock: 12, barcode: '057', price: 25.00, minStock: 3 },
  { id: 58, name: 'llave de paso', category: 'PVC', stock: 15, barcode: '058', price: 8.00, minStock: 3 },
  { id: 59, name: 'codo 2" nicol', category: 'PVC', stock: 30, barcode: '059', price: 3.00, minStock: 5 },
  { id: 60, name: 'teflon', category: 'PVC', stock: 100, barcode: '060', price: 1.00, minStock: 15 },
  { id: 61, name: 'valvula de ingreso universal', category: 'PVC', stock: 10, barcode: '061', price: 20.00, minStock: 2 },
  { id: 62, name: 'soda caustica 1/2 kg', category: 'PVC', stock: 20, barcode: '062', price: 8.00, minStock: 5 },
  { id: 63, name: 'kg clavo 4"', category: 'PVC', stock: 50, barcode: '063', price: 7.00, minStock: 10 },
  { id: 64, name: 'kg clavo 3"', category: 'PVC', stock: 50, barcode: '064', price: 7.00, minStock: 10 },
  { id: 65, name: 'pegamento oatey', category: 'PVC', stock: 15, barcode: '065', price: 14.00, minStock: 3 },
  { id: 66, name: 'reduccion 4" a 2"', category: 'PVC', stock: 12, barcode: '066', price: 4.50, minStock: 3 },
  { id: 67, name: 'tapon 2"', category: 'PVC', stock: 25, barcode: '067', price: 2.00, minStock: 5 },
  { id: 68, name: 'codo 2" x 90', category: 'PVC', stock: 30, barcode: '068', price: 2.50, minStock: 5 },
  { id: 69, name: 'union presion 1/2" nicol', category: 'PVC', stock: 50, barcode: '069', price: 1.50, minStock: 10 },
  { id: 70, name: 'codo mezcladora 1/2" - 3/4"', category: 'PVC', stock: 15, barcode: '070', price: 6.50, minStock: 3 },
  { id: 71, name: 'pegamento soldimix 10 minutos', category: 'PVC', stock: 12, barcode: '071', price: 11.00, minStock: 2 },
  { id: 72, name: 'tubo 3/4" luz eco', category: 'PVC', stock: 30, barcode: '072', price: 2.50, minStock: 5 },
  { id: 73, name: 'codo de luz 3/4"', category: 'PVC', stock: 50, barcode: '073', price: 0.50, minStock: 10 },
  { id: 74, name: 'pegamento azurin 1/2"', category: 'PVC', stock: 15, barcode: '074', price: 20.00, minStock: 3 },
  { id: 75, name: 'codo 4" nicol', category: 'PVC', stock: 12, barcode: '075', price: 10.00, minStock: 2 },
  { id: 76, name: 'tee 4"', category: 'PVC', stock: 10, barcode: '076', price: 15.00, minStock: 2 },
  { id: 77, name: 'trampa de 2"', category: 'PVC', stock: 8, barcode: '077', price: 13.00, minStock: 2 },
  { id: 78, name: 'rejilla de 2"', category: 'PVC', stock: 20, barcode: '078', price: 5.00, minStock: 5 },
  { id: 79, name: 'codo 4" - 45°', category: 'PVC', stock: 15, barcode: '079', price: 10.00, minStock: 3 }
];

const initialUsers = [
  { id: 1, name: 'Ray Guillen', role: 'Gerente General', email: 'ray@ferreteria.com', status: 'Activo' },
  { id: 2, name: 'Vilma Flores', role: 'Vendedora', email: 'vilma@ferreteria.com', status: 'Activo' },
  { id: 3, name: 'Pedro Guillen', role: 'Almacenero', email: 'pedro@ferreteria.com', status: 'Activo' },
];

const mockKardex = [
  { id: 101, date: '10/06/2026', product: 'Broca HSS 3/8', type: 'Ingreso', qty: 20, balance: 30, user: 'Pedro Guillen', ref: 'Compra Fac-001' },
  { id: 102, date: '10/06/2026', product: 'Broca HSS 3/8', type: 'Salida', qty: 20, balance: 10, user: 'Vilma Flores', ref: 'Venta Bol-402' },
  { id: 103, date: '12/06/2026', product: 'codo 1/2"', type: 'Ingreso', qty: 50, balance: 50, user: 'Pedro Guillen', ref: 'Compra Fac-005' },
];

const mockOrders = [
  { id: 'ORD-001', type: 'Orden de Salida', status: 'Pendiente', date: '10/06/2026', items: 'Material Construcción', user: 'Pedro Guillen' },
  { id: 'REP-002', type: 'Orden de Reposición', status: 'En Tránsito', date: '09/06/2026', items: 'Brocas y Herramientas', user: 'Ray Guillen' },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  // Estados Globales
  const [products, setProducts] = useState(initialProducts);
  const [users, setUsers] = useState(initialUsers);
  const [kardex, setKardex] = useState(mockKardex);
  const [orders, setOrders] = useState(mockOrders);
  
  // Simulador de Roles
  const [currentRole, setCurrentRole] = useState('Almacenero'); 

  // --- ESTADOS PARA FUNCIONALIDADES ---
  const [modalConfig, setModalConfig] = useState({ isOpen: false, type: null }); // types: 'INGRESO', 'PEDIDO', 'SALIDA'
  const [toast, setToast] = useState(null);
  const [searchTerm, setSearchTerm] = useState(''); // Estado para la barra de búsqueda en Stock
  const [searchTermKardex, setSearchTermKardex] = useState(''); // Nuevo Estado para la búsqueda en Kardex
  
  // Estados para Auditoría/Inventario
  const [auditStatus, setAuditStatus] = useState('INACTIVO'); // INACTIVO, SOLICITADA, EN_PROCESO, REPORTE_LISTO
  const [physicalCount, setPhysicalCount] = useState(48); // Mock para el Codo de 1/2" (ID 49)

  // Utilidades
  const isGerente = currentRole === 'Gerente General';
  const isAlmacenero = currentRole === 'Almacenero';

  // --- FUNCIONES Y MANEJADORES ---
  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3500);
  };

  const handleRegistrarIngreso = (e) => {
    e.preventDefault();
    const productId = parseInt(e.target.product.value);
    const qty = parseInt(e.target.qty.value);
    const ref = e.target.ref.value;
    
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Actualizar Stock
    const newStock = product.stock + qty;
    setProducts(products.map(p => p.id === productId ? { ...p, stock: newStock } : p));
    
    // Registrar en Kárdex
    const newKardexEntry = {
      id: Date.now(),
      date: new Date().toLocaleDateString('es-PE'),
      product: product.name,
      type: 'Ingreso',
      qty: qty,
      balance: newStock,
      user: isGerente ? 'Ray Guillen' : 'Pedro Guillen',
      ref: ref || 'Ingreso Manual'
    };
    setKardex([newKardexEntry, ...kardex]);
    
    setModalConfig({ isOpen: false, type: null });
    showToast(`Ingreso registrado: ${qty}x ${product.name}`);
  };

  const handleCrearOrden = (e, tipoOrden) => {
    e.preventDefault();
    const items = e.target.items.value;
    const newOrder = {
      id: `ORD-${Math.floor(Math.random() * 10000)}`,
      type: tipoOrden,
      status: tipoOrden === 'Orden de Reposición' ? 'En Tránsito' : 'Pendiente',
      date: new Date().toLocaleDateString('es-PE'),
      items: items,
      user: isGerente ? 'Ray Guillen' : 'Pedro Guillen'
    };
    setOrders([newOrder, ...orders]);
    setModalConfig({ isOpen: false, type: null });
    showToast(`${tipoOrden} creada exitosamente.`);
  };

  const handleEnviarReposicion = () => {
    const missing = products.filter(p => p.stock <= p.minStock);
    if (missing.length === 0) {
      showToast('No hay insumos faltantes para reponer.', 'error');
      return;
    }
    const itemsString = missing.map(m => m.name).join(', ');
    const newOrder = {
      id: `REP-${Math.floor(Math.random() * 10000)}`,
      type: 'Orden de Reposición',
      status: 'En Tránsito',
      date: new Date().toLocaleDateString('es-PE'),
      items: `Reposición autogenerada: ${itemsString}`,
      user: 'Ray Guillen'
    };
    setOrders([newOrder, ...orders]);
    showToast('Orden de reposición enviada al proveedor.');
  };

  // --- VISTAS DEL SISTEMA (Llamadas como funciones para evitar pérdida de foco) ---

  // 1. Dashboard Original
  const DashboardView = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-[#285260]">Panel Principal</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-[#E0D7CF]">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-500 font-medium">Stock Total de Productos</p>
              <p className="text-3xl font-bold text-[#285260] mt-2">{products.reduce((sum, item) => sum + item.stock, 0)}</p>
            </div>
            <div className="p-3 bg-[#B4D7D8]/30 rounded-lg text-[#548C92]"><Package size={24} /></div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-[#E0D7CF]">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-500 font-medium">Alertas de Stock Bajo</p>
              <p className="text-3xl font-bold text-[#AB9072] mt-2">{products.filter(item => item.stock <= item.minStock).length}</p>
            </div>
            <div className="p-3 bg-[#AB9072]/20 rounded-lg text-[#AB9072]"><AlertTriangle size={24} /></div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-[#E0D7CF]">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-500 font-medium">Órdenes Pendientes</p>
              <p className="text-3xl font-bold text-[#285260] mt-2">{orders.filter(o => o.status === 'Pendiente').length}</p>
            </div>
            <div className="p-3 bg-[#B4D7D8]/30 rounded-lg text-[#548C92]"><ClipboardList size={24} /></div>
          </div>
        </div>
      </div>
    </div>
  );

  // 2. Stock General
  const InventoryView = () => {
    // Filtrar productos dinámicamente según la búsqueda
    const filteredProducts = products.filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.barcode.includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h2 className="text-2xl font-bold text-[#285260]">Stock General</h2>
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Buscar código, nombre o categoría..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-[#B4D7D8] rounded-lg focus:outline-none focus:border-[#548C92]" 
            />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-[#E0D7CF] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-[#E0D7CF]/40">
                <tr className="text-xs text-[#285260] uppercase whitespace-nowrap">
                  <th className="px-6 py-4 font-bold">Código</th>
                  <th className="px-6 py-4 font-bold">Producto</th>
                  <th className="px-6 py-4 font-bold">Stock Actual</th>
                  <th className="px-6 py-4 font-bold">Estado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E0D7CF]">
                {filteredProducts.map((prod) => (
                  <tr key={prod.id} className="hover:bg-[#B4D7D8]/10">
                    <td className="px-6 py-4 font-mono text-gray-500 text-sm whitespace-nowrap">{prod.barcode}</td>
                    <td className="px-6 py-4 font-medium text-[#285260]">{prod.name}</td>
                    <td className="px-6 py-4">{prod.stock}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {prod.stock <= prod.minStock ? (
                        <span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-bold">Requiere Reposición</span>
                      ) : (
                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-bold">Óptimo</span>
                      )}
                    </td>
                  </tr>
                ))}
                {filteredProducts.length === 0 && (
                  <tr>
                    <td colSpan="4" className="px-6 py-8 text-center text-gray-500">
                      No se encontraron resultados para "{searchTerm}"
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  // 3. Kárdex (CUS-02 y CUS-11)
  const KardexView = () => {
    // Filtrar kárdex dinámicamente según la búsqueda de producto
    const filteredKardex = kardex.filter(mov => 
      mov.product.toLowerCase().includes(searchTermKardex.toLowerCase()) ||
      mov.ref.toLowerCase().includes(searchTermKardex.toLowerCase())
    );

    return (
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h2 className="text-2xl font-bold text-[#285260]">Kárdex de Movimientos</h2>
          
          <div className="flex flex-wrap sm:flex-nowrap gap-2 w-full sm:w-auto">
            {/* BARRA DE BÚSQUEDA DEL KÁRDEX PARA EL CASO CUS-02 */}
            <div className="relative flex-1 sm:w-64">
              <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Consultar por producto o ref..." 
                value={searchTermKardex}
                onChange={(e) => setSearchTermKardex(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-[#B4D7D8] rounded-lg focus:outline-none focus:border-[#548C92]" 
              />
            </div>
            
            <button 
              onClick={() => setModalConfig({ isOpen: true, type: 'INGRESO' })}
              disabled={!isAlmacenero}
              className={`px-4 py-2 rounded-lg flex items-center space-x-2 font-medium transition-colors whitespace-nowrap ${isAlmacenero ? 'bg-[#548C92] hover:bg-[#285260] text-white' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
              title="Solo Almacenero"
            >
              <Plus size={18} />
              <span>Registrar Ingreso</span>
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-[#E0D7CF] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-[#E0D7CF]/40">
                <tr className="text-xs text-[#285260] uppercase whitespace-nowrap">
                  <th className="px-6 py-4 font-bold">Fecha</th>
                  <th className="px-6 py-4 font-bold">Producto</th>
                  <th className="px-6 py-4 font-bold">Movimiento</th>
                  <th className="px-6 py-4 font-bold">Cant.</th>
                  <th className="px-6 py-4 font-bold">Saldo</th>
                  <th className="px-6 py-4 font-bold">Referencia</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E0D7CF]">
                {filteredKardex.map((mov) => (
                  <tr key={mov.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">{mov.date}</td>
                    <td className="px-6 py-4 font-medium text-[#285260]">{mov.product}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`flex items-center space-x-1 text-xs font-bold ${mov.type === 'Ingreso' ? 'text-green-600' : 'text-red-600'}`}>
                        {mov.type === 'Ingreso' ? <TrendingUp size={14}/> : <TrendingDown size={14}/>}
                        <span>{mov.type}</span>
                      </span>
                    </td>
                    <td className="px-6 py-4 font-bold">{mov.qty}</td>
                    <td className="px-6 py-4 bg-[#E0D7CF]/20 font-mono">{mov.balance}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{mov.ref}</td>
                  </tr>
                ))}
                {filteredKardex.length === 0 && (
                  <tr>
                    <td colSpan="6" className="px-6 py-8 text-center text-gray-500">
                      No hay movimientos registrados para "{searchTermKardex}"
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  // 4. Gestión de Órdenes
  const OrdersView = () => {
    const handleStatusChange = (id, newStatus) => {
      setOrders(orders.map(o => o.id === id ? { ...o, status: newStatus } : o));
      showToast(`Orden ${id} marcada como ${newStatus}`);
    };

    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-[#285260]">Gestión de Órdenes</h2>
          <div className="flex space-x-2">
            <button onClick={() => setModalConfig({ isOpen: true, type: 'PEDIDO' })} disabled={!isAlmacenero} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isAlmacenero ? 'bg-white border border-[#548C92] text-[#548C92] hover:bg-[#E0D7CF]/30' : 'bg-gray-100 text-gray-400'}`}>
              + Solicitud de Pedido
            </button>
            <button onClick={() => setModalConfig({ isOpen: true, type: 'SALIDA' })} disabled={!isGerente} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isGerente ? 'bg-[#285260] text-white hover:bg-[#548C92]' : 'bg-gray-200 text-gray-400'}`}>
              + Orden de Salida
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {orders.map(order => (
            <div key={order.id} className="bg-white p-5 rounded-xl border border-[#B4D7D8] shadow-sm relative">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <span className="text-xs font-bold text-[#548C92] uppercase">{order.type}</span>
                  <h3 className="text-lg font-bold text-[#285260]">{order.id}</h3>
                </div>
                <span className={`px-2 py-1 rounded text-xs font-bold ${
                  order.status === 'Pendiente' ? 'bg-yellow-100 text-yellow-700' :
                  order.status === 'En Tránsito' ? 'bg-blue-100 text-blue-700' :
                  order.status === 'Anulada' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
                }`}>{order.status}</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">{order.items}</p>
              
              {/* Botones de Acción según el Rol */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#E0D7CF]">
                {order.type === 'Orden de Salida' && order.status === 'Pendiente' && (
                  <button onClick={() => handleStatusChange(order.id, 'Anulada')} disabled={!isGerente} className={`text-xs px-3 py-1.5 rounded flex items-center ${isGerente ? 'bg-red-50 text-red-600 hover:bg-red-100' : 'bg-gray-100 text-gray-400'}`}>
                    <XCircle size={14} className="mr-1"/> Anular Orden
                  </button>
                )}
                {order.type === 'Orden de Reposición' && order.status === 'En Tránsito' && (
                  <>
                    <button onClick={() => handleStatusChange(order.id, 'Recibida')} disabled={!isAlmacenero} className={`text-xs px-3 py-1.5 rounded flex items-center ${isAlmacenero ? 'bg-green-50 text-green-600 hover:bg-green-100' : 'bg-gray-100 text-gray-400'}`}>
                      <CheckCircle size={14} className="mr-1"/> Verificar Recepción
                    </button>
                    <button onClick={() => handleStatusChange(order.id, 'Anulada')} disabled={!isGerente} className={`text-xs px-3 py-1.5 rounded flex items-center ${isGerente ? 'bg-red-50 text-red-600 hover:bg-red-100' : 'bg-gray-100 text-gray-400'}`}>
                      <XCircle size={14} className="mr-1"/> Anular Reposición
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // 5. Auditoría e Inventario Físico
  const AuditReportsView = () => {
    const missingItems = products.filter(p => p.stock <= p.minStock);
    const targetProduct = products.find(p => p.id === 49); // Usamos ID 49 (Codo 1/2) para la demo de auditoría

    return (
      <div className="space-y-8">
        {/* Sección Faltantes */}
        <div className="bg-white rounded-xl shadow-sm border border-red-200 p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-red-700 flex items-center"><ShieldAlert className="mr-2" /> Insumos Faltantes</h3>
            <button onClick={handleEnviarReposicion} disabled={!isGerente} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isGerente ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-gray-200 text-gray-400'}`}>
              Enviar Orden de Reposición
            </button>
          </div>
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-gray-200"><th className="pb-2">Producto</th><th className="pb-2">Stock Actual</th><th className="pb-2">Mínimo Permitido</th></tr>
            </thead>
            <tbody>
              {missingItems.map(item => (
                <tr key={item.id}>
                  <td className="py-2 text-[#285260] font-medium">{item.name}</td>
                  <td className="py-2 font-bold text-red-600">{item.stock}</td>
                  <td className="py-2 text-gray-500">{item.minStock}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Sección Inventario Físico vs Kárdex */}
        <div className="bg-white rounded-xl shadow-sm border border-[#E0D7CF] p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 border-b border-[#E0D7CF] pb-4">
            <div>
              <h3 className="text-lg font-bold text-[#285260]">Control de Inventario Físico</h3>
              <p className="text-sm text-gray-500">Estado actual: <strong className="text-[#548C92]">{auditStatus}</strong></p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button 
                onClick={() => { setAuditStatus('SOLICITADA'); showToast('Verificación Solicitada al Gerente'); }}
                disabled={!isAlmacenero || auditStatus !== 'INACTIVO'} 
                className={`px-3 py-1.5 rounded text-xs font-medium border transition-colors ${isAlmacenero && auditStatus === 'INACTIVO' ? 'border-[#548C92] text-[#548C92] hover:bg-[#E0D7CF]/30' : 'border-gray-200 text-gray-400 cursor-not-allowed'}`}
              >
                1. Solicitar Verificación
              </button>
              <button 
                onClick={() => { setAuditStatus('EN_PROCESO'); showToast('Orden Emitida. Proceder con conteo físico.'); }}
                disabled={!isGerente || auditStatus !== 'SOLICITADA'} 
                className={`px-3 py-1.5 rounded text-xs font-medium border transition-colors ${isGerente && auditStatus === 'SOLICITADA' ? 'bg-[#548C92] text-white hover:bg-[#285260]' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
              >
                2. Emitir Orden Inv.
              </button>
            </div>
          </div>

          <table className="w-full text-left text-sm mb-6">
            <thead className="bg-[#B4D7D8]/20">
              <tr>
                <th className="p-3">Producto</th>
                <th className="p-3">Stock Kárdex</th>
                <th className="p-3">Conteo Físico</th>
                <th className="p-3">Diferencia</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 font-medium">{targetProduct?.name}</td>
                <td className="p-3">{targetProduct?.stock}</td>
                <td className="p-3">
                  <input 
                    type="number" 
                    value={physicalCount} 
                    onChange={(e) => setPhysicalCount(parseInt(e.target.value) || 0)}
                    disabled={!isAlmacenero || auditStatus !== 'EN_PROCESO'} 
                    className="w-20 px-2 py-1 border border-[#B4D7D8] rounded focus:outline-none focus:border-[#548C92]" 
                  />
                </td>
                <td className={`p-3 font-bold ${physicalCount - targetProduct?.stock < 0 ? 'text-red-500' : physicalCount - targetProduct?.stock > 0 ? 'text-green-500' : 'text-gray-500'}`}>
                  {physicalCount - targetProduct?.stock > 0 ? '+' : ''}{physicalCount - targetProduct?.stock}
                </td>
              </tr>
            </tbody>
          </table>

          <div className="flex flex-wrap gap-3 justify-end bg-gray-50 p-4 rounded-lg">
             <button 
                onClick={() => { setAuditStatus('REPORTE_LISTO'); showToast('Reporte de conformidad generado exitosamente.'); }}
                disabled={!isAlmacenero || auditStatus !== 'EN_PROCESO'} 
                className={`px-4 py-2 rounded font-medium text-sm transition-colors ${isAlmacenero && auditStatus === 'EN_PROCESO' ? 'bg-[#AB9072] text-white hover:bg-[#8c745a]' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
              >
                Generar Rep. Conformidad
              </button>
              <button 
                onClick={() => { setAuditStatus('INACTIVO'); showToast('Reporte anulado. Flujo reiniciado.', 'error'); }}
                disabled={!isGerente || auditStatus === 'INACTIVO'} 
                className={`px-4 py-2 rounded font-medium text-sm transition-colors ${isGerente && auditStatus !== 'INACTIVO' ? 'bg-red-50 text-red-600 border border-red-200 hover:bg-red-100' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
              >
                Anular Reporte
              </button>
              <button 
                onClick={() => {
                  // Aplicar ajuste de inventario real
                  setProducts(products.map(p => p.id === 49 ? { ...p, stock: physicalCount } : p));
                  setAuditStatus('INACTIVO');
                  showToast('Ajuste de inventario autorizado y aplicado al stock real.');
                }}
                disabled={!isGerente || auditStatus !== 'REPORTE_LISTO'} 
                className={`px-4 py-2 rounded font-medium text-sm flex items-center transition-colors ${isGerente && auditStatus === 'REPORTE_LISTO' ? 'bg-[#285260] text-white hover:bg-[#548C92]' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
              >
                <CheckCircle size={16} className="mr-2"/> Autorizar Ajuste
              </button>
          </div>
        </div>
      </div>
    );
  };

  // Componente Menú Lateral
  const SidebarItem = ({ icon: Icon, label, id }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
        activeTab === id ? 'bg-[#548C92] text-white shadow-md' : 'text-[#B4D7D8] hover:bg-[#548C92]/50 hover:text-white'
      }`}
    >
      <Icon size={20} />
      {sidebarOpen && <span className="font-medium text-sm">{label}</span>}
    </button>
  );

  return (
    <div className="min-h-screen flex bg-gray-50 font-sans relative">
      
      {/* Notificaciones (Toast) */}
      {toast && (
        <div className={`fixed top-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg text-white font-medium flex items-center transition-opacity ${toast.type === 'error' ? 'bg-red-500' : 'bg-[#548C92]'}`}>
          {toast.type === 'error' ? <XCircle size={20} className="mr-2"/> : <CheckCircle size={20} className="mr-2"/>}
          {toast.message}
        </div>
      )}

      {/* MODALES */}
      {modalConfig.isOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden">
            <div className="bg-[#285260] px-6 py-4 flex justify-between items-center text-white">
              <h3 className="font-bold text-lg">
                {modalConfig.type === 'INGRESO' && 'Registrar Nuevo Ingreso'}
                {modalConfig.type === 'PEDIDO' && 'Crear Solicitud de Pedido'}
                {modalConfig.type === 'SALIDA' && 'Crear Orden de Salida'}
              </h3>
              <button onClick={() => setModalConfig({ isOpen: false, type: null })} className="hover:text-[#B4D7D8]"><X size={20}/></button>
            </div>
            
            <div className="p-6">
              {modalConfig.type === 'INGRESO' && (
                <form onSubmit={handleRegistrarIngreso} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[#285260] mb-1">Producto</label>
                    <select name="product" required className="w-full px-3 py-2 border border-[#B4D7D8] rounded focus:outline-none focus:border-[#548C92]">
                      <option value="">Seleccione un producto...</option>
                      {products.map(p => <option key={p.id} value={p.id}>{p.barcode} - {p.name} (Stock: {p.stock})</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#285260] mb-1">Cantidad a Ingresar</label>
                    <input type="number" name="qty" min="1" required className="w-full px-3 py-2 border border-[#B4D7D8] rounded focus:outline-none focus:border-[#548C92]" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#285260] mb-1">Documento / Referencia</label>
                    <input type="text" name="ref" placeholder="Ej: Factura F001-452" required className="w-full px-3 py-2 border border-[#B4D7D8] rounded focus:outline-none focus:border-[#548C92]" />
                  </div>
                  <div className="pt-4 flex justify-end space-x-3">
                    <button type="button" onClick={() => setModalConfig({ isOpen: false, type: null })} className="px-4 py-2 border border-gray-300 rounded text-gray-600 hover:bg-gray-50">Cancelar</button>
                    <button type="submit" className="px-4 py-2 bg-[#548C92] text-white rounded hover:bg-[#285260]">Guardar Ingreso</button>
                  </div>
                </form>
              )}

              {(modalConfig.type === 'PEDIDO' || modalConfig.type === 'SALIDA') && (
                <form onSubmit={(e) => handleCrearOrden(e, modalConfig.type === 'PEDIDO' ? 'Solicitud de Pedido' : 'Orden de Salida')} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[#285260] mb-1">Descripción de Insumos / Items</label>
                    <textarea name="items" rows="4" required placeholder="Detalle aquí los productos solicitados..." className="w-full px-3 py-2 border border-[#B4D7D8] rounded focus:outline-none focus:border-[#548C92]"></textarea>
                  </div>
                  <div className="pt-4 flex justify-end space-x-3">
                    <button type="button" onClick={() => setModalConfig({ isOpen: false, type: null })} className="px-4 py-2 border border-gray-300 rounded text-gray-600 hover:bg-gray-50">Cancelar</button>
                    <button type="submit" className="px-4 py-2 bg-[#548C92] text-white rounded hover:bg-[#285260]">Generar Documento</button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-[#285260] text-white flex flex-col transition-all duration-300 shadow-xl z-20`}>
        <div className="h-16 flex items-center justify-between px-4 border-b border-[#548C92]">
          {sidebarOpen && <span className="font-bold text-xl tracking-wider text-[#E0D7CF]">FERRETERÍA</span>}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 rounded hover:bg-[#548C92] text-[#B4D7D8]">
            <Menu size={20} />
          </button>
        </div>
        
        <nav className="flex-1 px-3 py-6 space-y-2 overflow-y-auto">
          <p className="px-4 text-xs font-bold text-[#548C92] uppercase mt-2 mb-1">General</p>
          <SidebarItem id="dashboard" icon={LayoutDashboard} label="Dashboard" />
          <SidebarItem id="inventory" icon={Package} label="Stock General" />
          
          <p className="px-4 text-xs font-bold text-[#548C92] uppercase mt-6 mb-1">Operaciones</p>
          <SidebarItem id="kardex" icon={ArrowRightLeft} label="Kárdex" />
          <SidebarItem id="orders" icon={ClipboardList} label="Órdenes y Pedidos" />
          
          <p className="px-4 text-xs font-bold text-[#548C92] uppercase mt-6 mb-1">Auditoría</p>
          <SidebarItem id="reports" icon={FileText} label="Reportes / Inventario" />
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar con Selector de Rol */}
        <header className="h-16 bg-white border-b border-[#E0D7CF] flex items-center justify-between px-6 z-10">
          <div className="flex-1">
             <h2 className="text-[#548C92] font-semibold flex items-center">
               Sistema de Inventario
             </h2>
          </div>
          
          <div className="flex items-center space-x-6">
            {/* SIMULADOR DE ROLES */}
            <div className="flex items-center space-x-2 bg-[#E0D7CF]/30 px-3 py-1.5 rounded-lg border border-[#E0D7CF]">
              <UserCircle size={18} className="text-[#285260]" />
              <span className="text-sm text-gray-600 font-medium hidden sm:inline">Rol actual:</span>
              <select 
                value={currentRole} 
                onChange={(e) => setCurrentRole(e.target.value)}
                className="bg-transparent text-[#285260] font-bold focus:outline-none text-sm cursor-pointer"
              >
                <option value="Gerente General">Gerente General</option>
                <option value="Almacenero">Almacenero</option>
              </select>
            </div>

            <button className="p-2 text-gray-400 hover:text-[#548C92] rounded-full transition-colors relative">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-[#AB9072] rounded-full border-2 border-white"></span>
            </button>
          </div>
        </header>

        {/* Dynamic Content Area */}
        <main className="flex-1 overflow-y-auto p-6 bg-[#E0D7CF]/10">
          <div className="w-full">
            {activeTab === 'dashboard' && DashboardView()}
            {activeTab === 'inventory' && InventoryView()}
            {activeTab === 'kardex' && KardexView()}
            {activeTab === 'orders' && OrdersView()}
            {activeTab === 'reports' && AuditReportsView()}
          </div>
        </main>
      </div>
    </div>
  );
}