import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className="footer--left">
        <div className="footer--links">
          <a href="/">Tetang Disney+ Hotstar</a>
          <a href="/">Syarat Penggunaan</a>
          <a href="/">Kebijakan Privasi (Baru)</a>
          <a href="/">Tanya Jawab</a>
          <a href="/">Masukan</a>
        </div>
        <div className="copyrights">
          © 2021 Disney dan semua perusahaan terkait. Hak cipta dilindungi undang-undang.
          © 2021 semua perusahaan pemberi lisensi Disney. Hak cipta dilindungi undang-undang.
        </div>
      </div>
      <div className="footer--right">
        <div className="connect--with">
          <span>Terhubunglah dengan kami</span>
          <div className="social--logo">
            
          </div>
        </div>
        <div className='disney--app'>
          <span>Disney+ App</span>
          <div className="download">

          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
