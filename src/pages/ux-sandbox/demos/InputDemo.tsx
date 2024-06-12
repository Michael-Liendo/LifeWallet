import Input from '../../../components/Input';

export function InputDemo() {
  return (
    <>
      <div>
        <Input type="date" label="Fecha" />
        <Input type="datetime-local" label="Fecha y hora local" />
        <Input type="email" label="Correo electrónico" />
        <Input type="file" label="Archivo" />
        <Input type="hidden" label="Oculto" />
        <Input type="image" label="Imagen" />
        <Input type="month" label="Mes" />
        <Input type="number" label="Número" />
        <Input type="password" label="Contraseña" />
        <Input type="radio" label="Radio" />
        <Input type="range" label="Rango" />
        <Input type="reset" label="Reiniciar" />
        <Input type="search" label="Buscar" />
        <Input type="submit" label="Enviar" />
        <Input type="tel" label="Teléfono" />
        <Input type="time" label="Hora" />
        <Input type="url" label="URL" />
        <Input type="week" label="Semana" />
      </div>
    </>
  );
}
