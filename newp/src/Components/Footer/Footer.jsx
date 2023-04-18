


function Footer(params) {
    return (
        <>
          <div className="footerBox">
            <div className="container">
                <form action="" className="footerForm">
                    <h4 className="footerForm__span">Newsletter</h4>
                    <h3 className="footerForm__title">Subscribe to Our Newsletter</h3>
                    <p className="footerForm__add">And never miss latest Updates!</p>
                    <div className="footerForm__bar">
                    <input className="footerForm__input" type="text" placeholder="Email address"/>
                    <button className="footerForm__btn">Subscribe</button>
                    </div>
                   
                </form>
                <div className="footer">
                    <div className="footer__part">
                       <h4 className="footer__part-title">Contact Us</h4>
                       <span className="footer__part-span">9 W 53rd St, London, NY 10019, UK <br />
                       +1 212-344-1230 <br />
                       +1 212-555-1230
                       </span>
                    </div>
                    <div className="footer__part">
                       <img src="https://static.wixstatic.com/media/e49f4b_1d6399fc9f4641d7bb545041fd65c740~mv2.png/v1/fill/w_512,h_194,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e49f4b_1d6399fc9f4641d7bb545041fd65c740~mv2.png" alt="cdc" className="footer__part-img" />
                       <span className="footer__part-span">
                       "The best way to find yourself is to lose yourself in the service of others.”
                       </span>
                    </div>
                    <div className="footer__part">
                       <h4 className="footer__part-title">Working Hours</h4>
                       <span className="footer__part-span">Monday-Friday: <br />
                        08:00 am -12:00 am<br />
                        Saturday-Sunday: <br />
                        07:00am -11:00 pm                 
                       
                       </span>
                    </div>
                </div>
            </div>
          </div>
        </>
    )
}
export default Footer; 