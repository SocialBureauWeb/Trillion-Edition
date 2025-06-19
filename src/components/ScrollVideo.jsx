import { useEffect, useRef, useState } from 'react';

const ScrollVideo = () => {
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);
  const contentRef = useRef(null);
  const progressBarRef = useRef(null);
  const progressTextRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  const [videoDuration, setVideoDuration] = useState(10);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isVideoComplete, setIsVideoComplete] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    const onMetadataLoaded = () => {
      setVideoLoaded(true);
      setVideoDuration(video.duration);
      video.currentTime = 0;
    };

    video.addEventListener('loadedmetadata', onMetadataLoaded);

    let ticking = false;
    let scrollTimeout;

    const updateVideoOnScroll = () => {
      if (!videoLoaded) return;

      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const videoMaxScroll = window.innerHeight * 2;
      const videoProgress = Math.min(scrollTop / videoMaxScroll, 1);
      const targetTime = videoProgress * videoDuration;

      video.currentTime = targetTime;

      const progressPercent = Math.round(videoProgress * 100);
      progressBarRef.current.style.width = progressPercent + '%';
      progressTextRef.current.textContent = progressPercent + '%';

      if (videoProgress >= 0.95 && !isVideoComplete) {
        setIsVideoComplete(true);
        videoContainerRef.current.style.position = 'absolute';
        videoContainerRef.current.style.top = '0';
        contentRef.current?.classList.add('revealed');
        scrollIndicatorRef.current.style.display = 'none';
      }

      if (scrollTop > window.innerHeight * 2.5) {
        videoContainerRef.current.style.opacity = '0';
      } else {
        videoContainerRef.current.style.opacity = '1';
      }

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateVideoOnScroll);
        ticking = true;
      }

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        video.pause();
      }, 150);
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      video.removeEventListener('loadedmetadata', onMetadataLoaded);
      window.removeEventListener('scroll', onScroll);
    };
  }, [videoLoaded, videoDuration, isVideoComplete]);

  return (
    <>
      {/* Style for content-section animation */}
      <style>{`
        .content-section {
          transform: translateY(100px);
          opacity: 0;
          transition: all 0.8s ease;
        }

        .content-section.revealed {
          transform: translateY(0);
          opacity: 1;
        }
      `}</style>

      <div
        ref={videoContainerRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height:'100vh',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'black',
          transition: 'opacity 0.5s'
        }}
      >
        <video
          ref={videoRef}
          style={{ width: '100%' }}
          playsInline
          muted
          preload="metadata"
        >
          <source
            src="https://cdn.dribbble.com/userupload/36814465/file/large-b7dbab2ea0b827f19a6bbfed00d70a99.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div
        ref={scrollIndicatorRef}
        style={{
          position: 'fixed',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 20,
          textAlign: 'center',
          color: 'white',
          fontSize: '0.875rem',
          opacity: 0.7
        }}
      >
        <div style={{ marginBottom: '0.25rem' }}></div>
        <div ref={progressTextRef}></div>
      </div>

      <div
        ref={progressBarRef}
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          height: '3px',
          background: 'linear-gradient(to right, #6366f1, #8b5cf6)',
          zIndex: 20,
          width: '0%',
          transition: 'all 0.15s ease-in-out'
        }}
      ></div>

    </>
  );
};

export default ScrollVideo;
