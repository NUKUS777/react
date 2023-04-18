
const kebab = 'https://www.shutterstock.com/image-photo/grilled-lula-kebab-on-skewers-260nw-1820685599.jpg'

function HeroFunc() {
    return <>
      <div className="heroBox">
    <div className="container">
      <div className="hero">
        <div className="hero__left">
          <span className="hero__left-span">Chase the new Flavour</span>
          <h1 className="hero__left-title">The key to Fine dining</h1>
          <p className="hero__left-des">Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
          <button className="hero__left-btn">Explore Menu</button>
        </div >
        <img src={kebab} className="hero__right" alt="ff"/>
      </div>
    </div>
  </div></>
  
}
export default HeroFunc ;