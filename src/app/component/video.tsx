const styles = {
    div: {
      // Add a comma after this property
      border: "2px solid black", 
      
    },
  };
  

export function Video() {
  return (
    <>
    <div style={styles.div} className='ml-28 mt-28 mr-28 p-7 hidden md:block   '>

      <video  height="200" width="350" loop autoPlay muted style={{ marginTop: '20px' }}>
        <source src="/videos/getStarted.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

    <div className="w-full max-w-sm mx-auto mt-6 p-4 lg:hidden">
  <video
    className="w-full rounded-md"
    height="auto"
    loop
    autoPlay
    muted
    style={{ marginTop: '10px' }}
  >
    <source src="/videos/getStarted.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>

    </>
  );
}
