import React from 'react';
import banner from '../assets/banner.jpg';
import banner2 from '../assets/banner2.png';
import logo from '../assets/logo.png';
import '../css/bannerFullWidth.css';

function BannerFullWidth(){
    return(
        <>


<section className="banner" id="banner" style={{ backgroundImage: `url(${banner})` }}>
        <a href="https://www.offspring.com/home"><img src={logo} alt="Logo da Banda Offspring" className="bannerLogo">
        </img></a>

        <h1 className="bannerTitle">Tour</h1>
        <a className="bannerLink" href="https://found.ee/TOS-preorderlive">
        <div className="bannerMessage"><p className="bannerMessageParagraph">Preorder SUPERCHARGED, the new album from The Offspring from participating stores & countries for early access tickets for their future tour dates (T&C apply, click the link to details)</p></div>
        </a>

        <div className="tourGridContainer">
            <div className="tourTitle">
                <p className="tourTitle1">DATE</p>
                <p className="tourTitle2">LOCATION</p>
                <p className="tourTitle3">VENUE</p>
                <p className="tourTitle4">INFORMATION</p>
                <p className="tourTitle5">SHARING & TICKETS</p>


            </div>
            <div className="tourInfo">
        <p className="tourInfo1">NOV 16</p>
        <p className="tourInfo2">San Diego, CA</p>
        <p className="tourInfo3">Thrive Park at Snapdragon Stadium</p>
        <p className="tourInfo4">Punk in The Park w/ Pennywise </p>
        <div className="tourInfoBtnContainer">
            <button className="tourBtn">TICKETS</button>
            <button className="tourBtn">I'M GOING</button>

        </div>
 </div>







            <div className="tourInfo">
        <p className="tourInfo1">NOV 24</p>
        <p className="tourInfo2">Melbourne, Australia</p>
        <p className="tourInfo3">Forum Melbourne</p>
        <p className="tourInfo4">LIGHT IT UP </p>
        <div className="tourInfoBtnContainer">
            <button className="tourBtn">TICKETS</button>
            <button className="tourBtn">I'M GOING</button>

        </div>
         </div>


         <div className="tourInfo">
        <p className="tourInfo1">JAN 11</p>
        <p className="tourInfo2">Los Angeles, CA</p>
        <p className="tourInfo3">Kia Forum</p>
        <p className="tourInfo4">iHeartRadio ALTerEgo 2025 w/ Incubus, The Lumineers, Cage The Elephant & more </p>
        <div className="tourInfoBtnContainer">
            <button className="tourBtn">TICKETS</button>
            <button className="tourBtn">I'M GOING</button>

        </div>
         </div>

         <div className="tourInfo">
        <p className="tourInfo1">JAN 19</p>
        <p className="tourInfo2">Johannesburg, South Africa</p>
        <p className="tourInfo3">FNB STADIUM</p>
        <p className="tourInfo4">Calabash South Africa 2025 w/ Green Day</p>
        <div className="tourInfoBtnContainer">
            <button className="tourBtn">TICKETS</button>
            <button className="tourBtn">I'M GOING</button>

        </div>
         </div>



         <div className="tourInfo">
        <p className="tourInfo1">JAN 23</p>
        <p className="tourInfo2">Cape Town, South Africa</p>
        <p className="tourInfo3">DHL STADIUM</p>
        <p className="tourInfo4">Calabash South Africa 2025 w/ Green Day</p>
        <div className="tourInfoBtnContainer">
            <button className="tourBtn">TICKETS</button>
            <button className="tourBtn">I'M GOING</button>

        </div>
         </div>


         <div className="tourInfo">
        <p className="tourInfo1">JAN 27</p>
        <p className="tourInfo2">Dubai, United Arab Emirates</p>
        <p className="tourInfo3">Expo City Dubai</p>
        <p className="tourInfo4">W/ Green Day</p>
        <div className="tourInfoBtnContainer">
            <button className="tourBtn">TICKETS</button>
            <button className="tourBtn">I'M GOING</button>

        </div>
         </div>

         <div className="tourInfo">
        <p className="tourInfo1">MAR 5</p>
        <p className="tourInfo2">Belo Horizonte, Brazil</p>
        <p className="tourInfo3">Arena Hall</p>
        <p className="tourInfo4">W/ Amyl and the Sniffers</p>
        <div className="tourInfoBtnContainer">
            <button className="tourBtn">TICKETS</button>
            <button className="tourBtn">I'M GOING</button>

        </div>
         </div>


         <div className="tourInfo">
        <p className="tourInfo1">MAR 6</p>
        <p className="tourInfo2">Rio de Janeiro,  Brazil</p>
        <p className="tourInfo3">Farmasi Arena</p>
        <p className="tourInfo4">W/ Sublime and Rise Against</p>
        <div className="tourInfoBtnContainer">
            <button className="tourBtn">TICKETS</button>
            <button className="tourBtn">I'M GOING</button>

        </div>
         </div>

         <div className="tourInfo">
        <p className="tourInfo1">MAR 8</p>
        <p className="tourInfo2">São Paulo,  Brazil</p>
        <p className="tourInfo3">Allianz Parque</p>
        <p className="tourInfo4">W/ Sublime, Rise Against, The Damned, The Warning and Amyl and the Sniffers</p>
        <div className="tourInfoBtnContainer">
            <button className="tourBtn">TICKETS</button>
            <button className="tourBtn">I'M GOING</button>

        </div>
         </div>

         
         <div className="tourInfo">
        <p className="tourInfo1">MAR 9</p>
        <p className="tourInfo2">Curitiba,  Brazil</p>
        <p className="tourInfo3">Pedreira Paulo Leminski</p>
        <p className="tourInfo4">W/ Sublime, Rise Against, The Damned, The Warning and Amyl and the Sniffers</p>
        <div className="tourInfoBtnContainer">
            <button className="tourBtn">TICKETS</button>
            <button className="tourBtn">I'M GOING</button>

        </div>
         </div>
         <div className="tourInfo">
        <p className="tourInfo1">MAR 11</p>
        <p className="tourInfo2">Porto Alegre,  Brazil</p>
        <p className="tourInfo3">Pepsi on Stage</p>
        <p className="tourInfo4">
        W/ The Warning </p>
        <div className="tourInfoBtnContainer">
            <button className="tourBtn">TICKETS</button>
            <button className="tourBtn">I'M GOING</button>

        </div>
         </div>
         
         <div className="tourInfo">
        <p className="tourInfo1">MAR 21</p>
        <p className="tourInfo2">San Miguel, Peru</p>
        <p className="tourInfo3">Costa 21</p>
        <p className="tourInfo4">W/ LEUZEMIA</p>
        <div className="tourInfoBtnContainer">
            <button className="tourBtn">TICKETS</button>
            <button className="tourBtn">I'M GOING</button>

        </div>
         </div>

         <div className="tourInfo">
        <p className="tourInfo1">APR 26</p>
        <p className="tourInfo2">Tokyo - Japan</p>
        <p className="tourInfo3">Tokyo Garden Theater</p>
        <p className="tourInfo4">W/ Simple Plan</p>
        <div className="tourInfoBtnContainer">
            <button className="tourBtn">TICKETS</button>
            <button className="tourBtn">I'M GOING</button>

        </div>
         </div>

         <div className="tourInfo">
        <p className="tourInfo1">SEP 27</p>
        <p className="tourInfo2">Barcelona - Spain</p>
        <p className="tourInfo3">Palacio Vistalegre</p>
        <p className="tourInfo4">W/ Simple Plan</p>
        <div className="tourInfoBtnContainer">
            <button className="tourBtn">TICKETS</button>
            <button className="tourBtn">I'M GOING</button>

        </div>
         </div>

         <div className="tourInfo">
        <p className="tourInfo1">SEP 29</p>
        <p className="tourInfo2">Milan - Italy</p>
        <p className="tourInfo3"> Mediolanum Forum</p>
        <p className="tourInfo4">W/ Simple Plan</p>
        <div className="tourInfoBtnContainer">
            <button className="tourBtn">TICKETS</button>
            <button className="tourBtn">I'M GOING</button>

        </div>
         </div>




         
         <div className="tourInfo">
        <p className="tourInfo1">OCT 5</p>
        <p className="tourInfo2">Riga - Latvia</p>
        <p className="tourInfo3"> Zalgris Arena</p>
        <p className="tourInfo4">W/ Simple Plan</p>
        <div className="tourInfoBtnContainer">
            <button className="tourBtn">TICKETS</button>
            <button className="tourBtn">I'M GOING</button>

        </div>
         </div>

         <div className="tourInfo">
        <p className="tourInfo1">OCT 11</p>
        <p className="tourInfo2">Copenhagen, Denmark</p>
        <p className="tourInfo3"> Royal Arena</p>
        <p className="tourInfo4">W/ Simple Plan</p>
        <div className="tourInfoBtnContainer">
            <button className="tourBtn">TICKETS</button>
            <button className="tourBtn">I'M GOING</button>

        </div>
         </div>
         
         <div className="tourInfo">
        <p className="tourInfo1">OCT 18</p>
        <p className="tourInfo2">Las Vegas,NV</p>
        <p className="tourInfo3">Las Vegas Festival Grounds</p>
        <p className="tourInfo4">W/ Simple Plan</p>
        <div className="tourInfoBtnContainer">
            <button className="tourBtn">TICKETS</button>
            <button className="tourBtn">I'M GOING</button>

        </div>
         </div>

         
         <div className="tourInfo">
        <p className="tourInfo1">OCT 24</p>
        <p className="tourInfo2">Lins, Austria</p>
        <p className="tourInfo3">Atlas Arena</p>
        <p className="tourInfo4">W/ Simple Plan</p>
        <div className="tourInfoBtnContainer">
            <button className="tourBtn">TICKETS</button>
            <button className="tourBtn">I'M GOING</button>

        </div>
         </div>

         <div className="tourInfo">
        <p className="tourInfo1">OCT 26</p>
        <p className="tourInfo2">Lodz, Poland</p>
        <p className="tourInfo3"> Atlas Arena</p>
        <p className="tourInfo4">W/ Simple Plan</p>
        <div className="tourInfoBtnContainer">
            <button className="tourBtn">TICKETS</button>
            <button className="tourBtn">I'M GOING</button>

        </div>
         </div>
         <div className="tourInfo">
        <p className="tourInfo1">OCT 27</p>
        <p className="tourInfo2">Berlim, Germany</p>
        <p className="tourInfo3">Uber Arena</p>
        <p className="tourInfo4">W/ Simple Plan</p>
        <div className="tourInfoBtnContainer">
            <button className="tourBtn">TICKETS</button>
            <button className="tourBtn">I'M GOING</button>

        </div>
         </div>
         <div className="tourInfo">
        <p className="tourInfo1">OCT 28</p>
        <p className="tourInfo2">Hamburg, Germany</p>
        <p className="tourInfo3"> Barclays Arena</p>
        <p className="tourInfo4">W/ Simple Plan</p>
        <div className="tourInfoBtnContainer">
            <button className="tourBtn">TICKETS</button>
            <button className="tourBtn">I'M GOING</button>

        </div>
         </div>

         
         <div className="tourInfo">
        <p className="tourInfo1">OCT 30</p>
        <p className="tourInfo2">Munich, Germany</p>
        <p className="tourInfo3"> Olympiahalle</p>
        <p className="tourInfo4">W/ Simple Plan</p>
        <div className="tourInfoBtnContainer">
            <button className="tourBtn">TICKETS</button>
            <button className="tourBtn">I'M GOING</button>

        </div>
         </div>


         <div className="tourInfo">
        <p className="tourInfo1">NOV 3</p>
        <p className="tourInfo2">Brussels, Belgium</p>
        <p className="tourInfo3">ING Arena</p>
        <p className="tourInfo4">W/ Simple Plan</p>
        <div className="tourInfoBtnContainer">
            <button className="tourBtn">TICKETS</button>
            <button className="tourBtn">I'M GOING</button>

        </div>
         </div>
        
        </div>
</section>










        
        <section className="banner2" id="banner2" style={{ backgroundImage: `url(${banner2})` }}>
        <a href="https://www.offspring.com/home"><img src={logo} alt="Logo da Banda Offspring" className="bannerLogo">
        </img></a>

        <h1 className="bannerTitle">Tour</h1>
        <a className="bannerLink" href="https://found.ee/TOS-preorderlive">
        <div className="bannerMessage"><p className="bannerMessageParagraph">Preorder SUPERCHARGED, the new album from The Offspring from participating stores & countries for early access tickets for their future tour dates (T&C apply, click the link to details)</p></div>
        </a>

        <div className="tourGridContainer">
            <div className="tourTitle">
                <p className="tourTitle1">DATE</p>
                <p className="tourTitle2">LOCATION</p>
                <p className="tourTitle3">VENUE</p>
                <p className="tourTitle4">INFORMATION</p>
                <p className="tourTitle5">SHARING & TICKETS</p>


            </div>
            <div className="tourInfo">
        <p className="tourInfo1">NOV 16</p>
        <p className="tourInfo2">San Diego, CA</p>
        <p className="tourInfo3">Thrive Park at Snapdragon Stadium</p>
        <p className="tourInfo4">Punk in The Park w/ Pennywise </p>
        <div className="tourInfoBtnContainer">
            <button className="tourBtn">TICKETS</button>
            <button className="tourBtn">I'M GOING</button>

        </div>
 </div>







            <div className="tourInfo">
        <p className="tourInfo1">NOV 24</p>
        <p className="tourInfo2">Melbourne, Australia</p>
        <p className="tourInfo3">Forum Melbourne</p>
        <p className="tourInfo4">LIGHT IT UP </p>
        <div className="tourInfoBtnContainer">
            <button className="tourBtn">TICKETS</button>
            <button className="tourBtn">I'M GOING</button>

        </div>
         </div>


         <div className="tourInfo">
        <p className="tourInfo1">JAN 11</p>
        <p className="tourInfo2">Los Angeles, CA</p>
        <p className="tourInfo3">Kia Forum</p>
        <p className="tourInfo4">iHeartRadio ALTerEgo 2025 w/ Incubus, The Lumineers, Cage The Elephant & more </p>
        <div className="tourInfoBtnContainer">
            <button className="tourBtn">TICKETS</button>
            <button className="tourBtn">I'M GOING</button>

        </div>
         </div>

         <div className="tourInfo">
        <p className="tourInfo1">JAN 19</p>
        <p className="tourInfo2">Johannesburg, South Africa</p>
        <p className="tourInfo3">FNB STADIUM</p>
        <p className="tourInfo4">Calabash South Africa 2025 w/ Green Day</p>
        <div className="tourInfoBtnContainer">
            <button className="tourBtn">TICKETS</button>
            <button className="tourBtn">I'M GOING</button>

        </div>
         </div>



         <div className="tourInfo">
        <p className="tourInfo1">JAN 23</p>
        <p className="tourInfo2">Cape Town, South Africa</p>
        <p className="tourInfo3">DHL STADIUM</p>
        <p className="tourInfo4">Calabash South Africa 2025 w/ Green Day</p>
        <div className="tourInfoBtnContainer">
            <button className="tourBtn">TICKETS</button>
            <button className="tourBtn">I'M GOING</button>

        </div>
         </div>


         <div className="tourInfo">
        <p className="tourInfo1">JAN 27</p>
        <p className="tourInfo2">Dubai, United Arab Emirates</p>
        <p className="tourInfo3">Expo City Dubai</p>
        <p className="tourInfo4">W/ Green Day</p>
        <div className="tourInfoBtnContainer">
            <button className="tourBtn">TICKETS</button>
            <button className="tourBtn">I'M GOING</button>

        </div>
         </div>

         <div className="tourInfo">
        <p className="tourInfo1">MAR 5</p>
        <p className="tourInfo2">Belo Horizonte, Brazil</p>
        <p className="tourInfo3">Arena Hall</p>
        <p className="tourInfo4">W/ Amyl and the Sniffers</p>
        <div className="tourInfoBtnContainer">
            <button className="tourBtn">TICKETS</button>
            <button className="tourBtn">I'M GOING</button>

        </div>
         </div>


         <div className="tourInfo">
        <p className="tourInfo1">MAR 6</p>
        <p className="tourInfo2">Rio de Janeiro,  Brazil</p>
        <p className="tourInfo3">Farmasi Arena</p>
        <p className="tourInfo4">W/ Sublime and Rise Against</p>
        <div className="tourInfoBtnContainer">
            <button className="tourBtn">TICKETS</button>
            <button className="tourBtn">I'M GOING</button>

        </div>
         </div>

         <div className="tourInfo">
        <p className="tourInfo1">MAR 8</p>
        <p className="tourInfo2">São Paulo,  Brazil</p>
        <p className="tourInfo3">Allianz Parque</p>
        <p className="tourInfo4">W/ Sublime, Rise Against, The Damned, The Warning and Amyl and the Sniffers</p>
        <div className="tourInfoBtnContainer">
            <button className="tourBtn">TICKETS</button>
            <button className="tourBtn">I'M GOING</button>

        </div>
         </div>

         
         <div className="tourInfo">
        <p className="tourInfo1">MAR 9</p>
        <p className="tourInfo2">Curitiba,  Brazil</p>
        <p className="tourInfo3">Pedreira Paulo Leminski</p>
        <p className="tourInfo4">W/ Sublime, Rise Against, The Damned, The Warning and Amyl and the Sniffers</p>
        <div className="tourInfoBtnContainer">
            <button className="tourBtn">TICKETS</button>
            <button className="tourBtn">I'M GOING</button>

        </div>
         </div>
         <div className="tourInfo">
        <p className="tourInfo1">MAR 11</p>
        <p className="tourInfo2">Porto Alegre,  Brazil</p>
        <p className="tourInfo3">Pepsi on Stage</p>
        <p className="tourInfo4">
        W/ The Warning </p>
        <div className="tourInfoBtnContainer">
            <button className="tourBtn">TICKETS</button>
            <button className="tourBtn">I'M GOING</button>

        </div>
         </div>
         
         <div className="tourInfo">
        <p className="tourInfo1">MAR 21</p>
        <p className="tourInfo2">San Miguel, Peru</p>
        <p className="tourInfo3">Costa 21</p>
        <p className="tourInfo4">W/ LEUZEMIA</p>
        <div className="tourInfoBtnContainer">
            <button className="tourBtn">TICKETS</button>
            <button className="tourBtn">I'M GOING</button>

        </div>
         </div>

         <div className="tourInfo">
        <p className="tourInfo1">APR 26</p>
        <p className="tourInfo2">Tokyo - Japan</p>
        <p className="tourInfo3">Tokyo Garden Theater</p>
        <p className="tourInfo4">W/ Simple Plan</p>
        <div className="tourInfoBtnContainer">
            <button className="tourBtn">TICKETS</button>
            <button className="tourBtn">I'M GOING</button>

        </div>
         </div>

         <div className="tourInfo">
        <p className="tourInfo1">SEP 27</p>
        <p className="tourInfo2">Barcelona - Spain</p>
        <p className="tourInfo3">Palacio Vistalegre</p>
        <p className="tourInfo4">W/ Simple Plan</p>
        <div className="tourInfoBtnContainer">
            <button className="tourBtn">TICKETS</button>
            <button className="tourBtn">I'M GOING</button>

        </div>
         </div>

         <div className="tourInfo">
        <p className="tourInfo1">SEP 29</p>
        <p className="tourInfo2">Milan - Italy</p>
        <p className="tourInfo3"> Mediolanum Forum</p>
        <p className="tourInfo4">W/ Simple Plan</p>
        <div className="tourInfoBtnContainer">
            <button className="tourBtn">TICKETS</button>
            <button className="tourBtn">I'M GOING</button>

        </div>
         </div>




         
         <div className="tourInfo">
        <p className="tourInfo1">OCT 5</p>
        <p className="tourInfo2">Riga - Latvia</p>
        <p className="tourInfo3"> Zalgris Arena</p>
        <p className="tourInfo4">W/ Simple Plan</p>
        <div className="tourInfoBtnContainer">
            <button className="tourBtn">TICKETS</button>
            <button className="tourBtn">I'M GOING</button>

        </div>
         </div>

         <div className="tourInfo">
        <p className="tourInfo1">OCT 11</p>
        <p className="tourInfo2">Copenhagen, Denmark</p>
        <p className="tourInfo3"> Royal Arena</p>
        <p className="tourInfo4">W/ Simple Plan</p>
        <div className="tourInfoBtnContainer">
            <button className="tourBtn">TICKETS</button>
            <button className="tourBtn">I'M GOING</button>

        </div>
         </div>
         
         <div className="tourInfo">
        <p className="tourInfo1">OCT 18</p>
        <p className="tourInfo2">Las Vegas,NV</p>
        <p className="tourInfo3">Las Vegas Festival Grounds</p>
        <p className="tourInfo4">W/ Simple Plan</p>
        <div className="tourInfoBtnContainer">
            <button className="tourBtn">TICKETS</button>
            <button className="tourBtn">I'M GOING</button>

        </div>
         </div>

         
         <div className="tourInfo">
        <p className="tourInfo1">OCT 24</p>
        <p className="tourInfo2">Lins, Austria</p>
        <p className="tourInfo3">Atlas Arena</p>
        <p className="tourInfo4">W/ Simple Plan</p>
        <div className="tourInfoBtnContainer">
            <button className="tourBtn">TICKETS</button>
            <button className="tourBtn">I'M GOING</button>

        </div>
         </div>

         <div className="tourInfo">
        <p className="tourInfo1">OCT 26</p>
        <p className="tourInfo2">Lodz, Poland</p>
        <p className="tourInfo3"> Atlas Arena</p>
        <p className="tourInfo4">W/ Simple Plan</p>
        <div className="tourInfoBtnContainer">
            <button className="tourBtn">TICKETS</button>
            <button className="tourBtn">I'M GOING</button>

        </div>
         </div>
         <div className="tourInfo">
        <p className="tourInfo1">OCT 27</p>
        <p className="tourInfo2">Berlim, Germany</p>
        <p className="tourInfo3">Uber Arena</p>
        <p className="tourInfo4">W/ Simple Plan</p>
        <div className="tourInfoBtnContainer">
            <button className="tourBtn">TICKETS</button>
            <button className="tourBtn">I'M GOING</button>

        </div>
         </div>
         <div className="tourInfo">
        <p className="tourInfo1">OCT 28</p>
        <p className="tourInfo2">Hamburg, Germany</p>
        <p className="tourInfo3"> Barclays Arena</p>
        <p className="tourInfo4">W/ Simple Plan</p>
        <div className="tourInfoBtnContainer">
            <button className="tourBtn">TICKETS</button>
            <button className="tourBtn">I'M GOING</button>

        </div>
         </div>

         
         <div className="tourInfo">
        <p className="tourInfo1">OCT 30</p>
        <p className="tourInfo2">Munich, Germany</p>
        <p className="tourInfo3"> Olympiahalle</p>
        <p className="tourInfo4">W/ Simple Plan</p>
        <div className="tourInfoBtnContainer">
            <button className="tourBtn">TICKETS</button>
            <button className="tourBtn">I'M GOING</button>

        </div>
         </div>


         <div className="tourInfo">
        <p className="tourInfo1">NOV 3</p>
        <p className="tourInfo2">Brussels, Belgium</p>
        <p className="tourInfo3">ING Arena</p>
        <p className="tourInfo4">W/ Simple Plan</p>
        <div className="tourInfoBtnContainer">
            <button className="tourBtn">TICKETS</button>
            <button className="tourBtn">I'M GOING</button>

        </div>
         </div>
        
        </div>
</section>





</>
    );
}

export default BannerFullWidth;