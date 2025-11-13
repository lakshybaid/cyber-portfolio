import BootScreen from '../BootScreen';

export default function BootScreenExample() {
  return <BootScreen onComplete={() => console.log('Boot complete')} />;
}
