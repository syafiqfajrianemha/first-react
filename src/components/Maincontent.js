import Cardjurusan from "./Cardjurusan";
import Hero from "./Hero";
import jurusan1 from "../assets/jurusan1.jpg";
import jurusan2 from "../assets/jurusan2.jpg";
import jurusan3 from "../assets/jurusan3.jpg";
import Cardkegiatan from "./Cardkegiatan";
import kegiatan from "../assets/kegiatan.svg";

const Maincontent = () => {
  return (
    <div>
      <Hero />
      <div className="container">
        {/* jurusan */}
        <div className="row">
          <div className="col-lg-12 text-center my-3">
            <h1>Jurusan</h1>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 mb-3">
            <Cardjurusan
              image={jurusan1}
              title="AKUNTANSI DAN KEUANGAN LEMBAGA"
            />
          </div>
          <div className="col-lg-4 mb-3">
            <Cardjurusan
              image={jurusan2}
              title="MANAJEMEN PERKANTORAN DAN LAYANAN BISNIS"
            />
          </div>
          <div className="col-lg-4 mb-3">
            <Cardjurusan
              image={jurusan3}
              title="PENGEMBANGAN PERANGKAT LUNAK DAN GIM"
            />
          </div>
        </div>

        {/* kegiatan */}
        <div className="row mb-5 justify-content-center">
          <div className="col-lg-12 text-center my-3">
            <h1>Kegiatan</h1>
          </div>
          <div className="row">
            <div className="col-lg-12 mb-3">
              <Cardkegiatan
                image={kegiatan}
                title="Some quick example text to build"
              />
            </div>
            <div className="col-lg-12 mb-3">
              <Cardkegiatan
                image={kegiatan}
                title="Some quick example text to build"
              />
            </div>
            <div className="col-lg-12 mb-3">
              <Cardkegiatan
                image={kegiatan}
                title="Some quick example text to build"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maincontent;
