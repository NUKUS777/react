
const kebabUrl='https://thumbs.dreamstime.com/b/lamb-kebab-turkish-as-close-up-skewer-82130241.jpg'
function Dishes() {
    return (
        <>
         
<div className="dishesBox">
  <div className="container">
    <h2 className='dishesBox-title'>Popular Dishes</h2>
    <div className="dishes">
      <div className="dishes__card">
      <img className="dishes__card-img" src={kebabUrl} alt=""/>
        <div className="dishes__bar">
          <span className="dishes__bar-span">Barbecue Shish kebab Shashlik Skewer</span>
          <h3 className="dishes__bar-price">$12.00</h3>
        </div>
      </div>
      <div className="dishes__card">
        <img className="dishes__card-img" src={kebabUrl} alt=""/>
        <div className="dishes__bar">
          <span className="dishes__bar-span">Barbecue Shish kebab Shashlik Skewer</span>
          <h3 className="dishes__bar-price">$12.00</h3>
        </div>
      </div>
      <div className="dishes__card">
        <img className="dishes__card-img" src={kebabUrl} alt=""/>
        <div className="dishes__bar">
          <span className="dishes__bar-span">Barbecue Shish kebab Shashlik Skewer</span>
          <h3 className="dishes__bar-price">$12.00</h3>
        </div>
      </div>
      <div className="dishes__card">
        <img className="dishes__card-img" src={kebabUrl} alt=""/>
        <div className="dishes__bar">
          <span className="dishes__bar-span">Barbecue Shish kebab Shashlik Skewer</span>
          <h3 className="dishes__bar-price">$12.00</h3>
        </div>
      </div>
      
    </div>
  </div>
</div>
        </>
    )
}
export default Dishes;