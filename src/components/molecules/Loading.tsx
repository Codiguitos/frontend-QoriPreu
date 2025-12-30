import Text from "../atoms/Text";
interface LoadingProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  message?: string;
  className?: string;
}

// Mapa de tamaños para el círculo
const sizeClasses = {
  sm: 'w-5 h-5 border-2',
  md: 'w-8 h-8 border-3',
  lg: 'w-12 h-12 border-4',
  xl: 'w-16 h-16 border-4',
};

/**
 * Componente de carga circular simple
 */
export const Loading = ({ size = 'md', message, className = "" }: LoadingProps) => {
  return (
    <div className={`flex flex-col items-center justify-center gap-3 ${className}`}>
      {/* El Círculo Animado */}
      <div
        className={`
          ${sizeClasses[size]}
          rounded-full
          border-gray-700       /* Color del borde inactivo (gris oscuro) */
          border-t-[#00A676]    /* Color del borde activo (Tu verde) */
          border-r-[#00A676]    /* Un segundo lado verde para efecto asimétrico */
          animate-spin
        `}
      />
      
      {/* Mensaje opcional */}
      {message && (
        <Text size="small" className="text-gray-400 animate-pulse">
          {message}
        </Text>
      )}
    </div>
  );
};

/**
 * Componente de carga que cubre toda la pantalla o el contenedor padre (relative)
 */
export const FullScreenLoader = ({ message = "Cargando..." }: { message?: string }) => {
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-[#0d1512]/80 backdrop-blur-sm rounded-xl">
      <div className="bg-[#1a2220] p-6 rounded-2xl shadow-2xl border border-gray-700 flex flex-col items-center gap-4">
        <Loading size="lg" />
        <Text size="p" className="text-gray-200 font-medium">
          {message}
        </Text>
      </div>
    </div>
  );
};

export default Loading;