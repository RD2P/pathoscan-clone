
import './App.css'

function App() {

  return (

    // Hero
    <div className="container-fluid hero">

      {/* Logo */}
      <div className="vspacer-100"></div>
      <div className="row">
        <div className="col-12 col-md-6">
          <img src='./public/assets/logo-whitebg.png' width={200} />
        </div>
      </div>

      <div className="vspacer-200"></div>

      {/* Main hero content */}
      <div className="row px-lg-5">

        {/* Text and buttons */}
        <div className='col-md-7 mb-4 mb-md-0 d-flex align-items-center px-5'>
          <div className=''>
            <h1 className='text-md-start hero-heading'>A revolutionary crop disease diagnostic tool</h1>
            <hr className='white-hr' />
            <button className="btn btn-lg btn-patho me-2">GET IN TOUCH</button>
            <button className="btn btn-lg btn-patho">SIGN UP TODAY</button>
          </div>
        </div>

        {/* product picture */}
        <div className='col-md-5 row justify-content-center align-items-center'>
          <div className="col-7 col-sm-5">
            <img className='img-fluid' src='/public/assets/pathoscan_product.f56f4a74a5c856df7115.png' ></img>
          </div>
        </div>
      </div>
    </div >

  )
}

export default App
