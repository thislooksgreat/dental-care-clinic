declare module './Map' {
  interface MapProps {
    address: string;
  }
  
  const Map: React.FC<MapProps>;
  export default Map;
}
