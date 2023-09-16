import './App.css';
import Resource from './components/Resource';

function App() {
  return (
    <>
      <div className="container">
        <div className="text">
          <h1>Become the engineer you want to be.</h1>
          <h3>
            Below are some resources to learn more about software enginering.
          </h3>
        </div>
        <div className="image">
          <img src="https://cdn-assets.theforage.com/icons/hiring-paths/software-engineering-career-ed-refresh.svg" />
        </div>
      </div>
      <div className="cardContainer">
        <Resource
          image="https://yt3.googleusercontent.com/nFftJEiVxwRTL9OPe2bncvKgOIlYytuHImJCFFrSEmCUTbisGew0MaFoGo8zfVpDMAXEfRSjjQ=s176-c-k-c0x00ffffff-no-rj"
          name="Udacity"
          description="Classes on Udacity range from introductory level to advanced. "
          link="https://www.udacity.com/catalog"
        />
        <Resource
          image="https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/179/original/springboard_logo.png"
          name="SpringBoard"
          description="Springboard is an online education platform that aims to that aims to bridge the world’s skills gap.  "
          link="https://www.springboard.com/"
        />
        <Resource
          image="https://yt3.googleusercontent.com/8kmI-l1suZxgItpAe359N-jJCBct1PXe99e04kTit8XWE3D_pBnctd6pEiwwmapHbDMmC21E45Q=s176-c-k-c0x00ffffff-no-rj"
          name="Udemy"
          description="Udemy is an online platform with courses in a variety of subjects.  "
          link="https://www.udemy.com/"
        />
        <Resource
          image="https://yt3.googleusercontent.com/Vzv2OJNdnqMMuBwBp4RMI-4Mp5V3ouabPv0yO69EuxHxtazM12v7DFEOOna9ZEbcS3go-0hb=s176-c-k-c0x00ffffff-no-rj"
          name="Codeacademy"
          description="Codecademy is an online educational tool with both free and paid resources. "
          link="https://www.codecademy.com/"
        />
        <Resource
          image="https://yt3.googleusercontent.com/eTNX2v4J9Pz3p6tGFbKw-4KUSNvhWvpoVKLd4UJVh0FVwsvNb64YB7OIFbE02FM4Wvgo8Z4QwA=s176-c-k-c0x00ffffff-no-rj"
          name="Coursera"
          description="Similar to Codecademy, Coursera has various types of programs. "
          link="https://www.coursera.org/"
        />
        <Resource
          image="https://yt3.googleusercontent.com/ytc/AOPolaTs1IEit9EUooQAJkWS4SkpUE7oMDXYrjIgnOk1Kw=s176-c-k-c0x00ffffff-no-rj"
          name="freeCodeCamp"
          description=" freeCodeCamp offers certifications in responsive web design, JavaScript algorithms and data structures, and many more. "
          link="https://www.freecodecamp.org/"
        />
        <Resource
          image="https://yt3.googleusercontent.com/ytc/AOPolaQ2iMmw9cWFFjnwa13nBwtZQbl-AqGYkkiTqNaTLg=s176-c-k-c0x00ffffff-no-rj"
          name="Fireship"
          description="Youtube channel that covers new technologies and explains concepts."
          link="https://www.youtube.com/c/fireship"
        />
        <Resource
          image="https://yt3.googleusercontent.com/a5wTd7vJ4FmYgL5LLjWkfBJCU2TLLafB8rSIZ39pYN4Aqul5yh2gUarS8yMCj7JOVplEh4WjKQ=s176-c-k-c0x00ffffff-no-rj"
          name="devaslife"
          description="Youtube channel that focuses on the development of projects. "
          link="https://www.youtube.com/@devaslife"
        />
        <Resource
          image="https://yt3.googleusercontent.com/ytc/AOPolaS101j27Disa_BYArytv-hXMRl8wNMtqZMTkrfH=s176-c-k-c0x00ffffff-no-rj"
          name="Web Dev Simplified"
          description="Youtube channel that focuses on everything web dev related. "
          link="https://www.youtube.com/@WebDevSimplified"
        />
        <Resource
          image="https://yt3.googleusercontent.com/ytc/AOPolaRflPOPnzpUnpPPyhwAo-xvzerCuwK1WldN6OPvAQ=s176-c-k-c0x00ffffff-no-rj"
          name="Tech With Tim"
          description="Youtube channel that covers general software enginerring content. "
          link="https://www.youtube.com/@TechWithTim/videos"
        />
      </div>
    </>
  );
}

export default App;
