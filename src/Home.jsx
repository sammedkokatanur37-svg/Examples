import TechText from './TechText';

function Home() {
  return (
    <div style={{ width: '100%', height: '100vh', backgroundColor: '#000000' }}>
      <div style={{ width: '100%', height: '480px', position: 'relative' }}>
        <TechText
          text="sammed"
          fontWeight={600}
          fontSize={150}
          reveal="letter"
          dashLength={4}
          dashGap={2}
          specks={15}
          fontFamily=""
          color="#ffffff"
          accentColor="#ffffff"
          letterSpacing={-0.05}
          reach={200}
          softness={0.7}
          strokeWidth={1.5}
          speed={1}
          lineStyle="dashed"
          selection
          labels
          draggable
          sweep
        />
      </div>
    </div>
  );
}

export default Home;