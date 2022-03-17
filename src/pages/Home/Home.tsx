import styles from "./Home.module.scss";

import EOSEVM from '../../images/EVM.jpeg';
import Crowdloan from '../../images/Crowdloan.jpeg';
import LEOSDEX from '../../images/LEOSDEX.jpeg';
import LUSD from '../../images/LUSD.jpeg';
import Pools from '../../images/Pools.jpeg';
import TelegramIcon from '../../images/telegram.svg';

const NavBar = () => {
  return (
    <nav className={styles.NavBar}>
      <div className={styles.NavTitle}>LIQUEOS</div>
      <ul className={styles.NavItems}>
        <li className="NavItem" ><a href="#project-info">Project Info</a></li>
        <li className="NavItem"><a href="#roadmap">Road Map</a></li>
      </ul>
    </nav>
  );
};

export const Home = () => {
  return (
    <main className={styles.main}>
      <NavBar />
      <section className={styles.section}>
        <h2 className={styles.titleSection}>The First Crowdloan on EOS </h2>
        <article className={styles.text}>
          Liqueos is a crowd loan project on EOS . Its goal is to give liquidity
          to new tokens that join EOS mainnet and to EOS usersof the crowdloan.
          It also allows older tokens that already had launches on other chains
          a chance to do the same with a fraction of the tokens they have issued
          on other chains. It is a crowdloan app where new tokens can distribute
          their tokens in exchange for EOS over a 6 month period of time and the
          users can recieve the projects tokens and a token called LEOS which
          will represent the users liquid EOS inside of the crowdloan smart
          contract. Since EOS will be locked for 6 months this gives the user an
          opportunity to farm on our dex liquidity farm with LEOS, untill they
          receive their EOS back after 6 months giving the user liquidity in the
          form of LEOS tokens that can be used additionally for farming in our
          Liquidity Pools.At the end of 6 months the LEOS gets converted to EOS
          again. And for the 6 months all EOS in the crowdloan contract will
          have been staked to rex and voting inflation. 90% of the inflation
          goes to the projects distributing the tokens . 5% to the project fund
          wallet and 5% to the dev fund wallet. The projects launching on
          Liqueos can choose how many tokens to distribute and can do as many 6
          month periods as they want to aquire EOS. We also will have a stable
          coin minting system in the future that will let you mint a stablecoin
          with LEOS and EOS. Liqueos is also a truly decentralized exchange. The
          projects that participate in the crowdloan will obtain a LP slot in
          our LP pool this slot will be secured for the 6 month period that the
          projects participating in the Liqueos crowdloan have to wait for. This
          will allow full controll over liquidity pools. We at Liqueos will
          never remove your liquidity pools like defibox or pancake swap as long
          as the project token is participating in the crowd loan they will have
          an LP slot and may do as many 6 month crowdloans as necessary to
          achieve their goals.
        </article>
      </section>
      <section className={styles.section} id="project-info">
        <h2 className={styles.titleSection}>Project Info </h2>
        <article className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quia
          laudantium animi perferendis laborum. Dolorum commodi deleniti tempore
          adipisci, maxime minima modi accusantium incidunt iure, aut cumque!
          Blanditiis, enim et. Quos adipisci praesentium perspiciatis magnam
          dolorem reprehenderit aut officiis autem tenetur! Minus ab laboriosam
          commodi ea facilis ratione magnam hic, explicabo inventore? Sed at
          reiciendis veniam minus officiis, quae ducimus. A nulla animi repellat
          tempore, aliquid maiores facere assumenda totam asperiores
          voluptatibus dolores. Sunt aspernatur earum ducimus aut ipsum
          inventore in ut sapiente, non iure modi fuga unde corrupti quaerat!
          Neque cum obcaecati deserunt placeat libero accusamus ipsa maiores,
          incidunt, asperiores impedit, fugiat rem eaque! Eum non excepturi id
          cumque ea, asperiores at minima voluptatum fuga sit similique, nam
          doloribus.
        </article>
        <div className={styles.imgContainer}>
          <img src={EOSEVM} alt={'obo'}/>
          <img src={Crowdloan} alt={'obo'}/>
          <img src={LEOSDEX} alt={'obo'}/>
          <img src={Pools} alt={'obo'}/>
          <img src={LUSD} alt={'obo'}/>
        </div>
      </section>
      <section className={styles.section} id="roadmap">
        <h2 className={styles.titleSection}>Road Map </h2>
        <div className={styles.circleContainer}>
          <div className={styles.circle}>MVP</div>
          <div className={styles.arrow}></div>
          <div className={styles.circle}>Crowdloan</div>
          <div className={styles.arrow}></div>
          <div className={styles.circle}>DEX</div>
          <div className={styles.arrow}></div>
          <div className={styles.circle}>LP POOL</div>
          <div className={styles.arrow}></div>
          <div className={styles.circle}>DAO</div>
          <div className={styles.arrow}></div>
          <div className={styles.circle}>MINTLUSD</div>
          <div className={styles.arrow}></div>
        </div>
      </section>
      <footer className={styles.footer}> 
        <a className={styles.footerAnchor} target="_blank" rel="noreferrer" href="https://t.me/+c-vWdhgcPHViNmEx">
        <img className={styles.telgramIcon} src={TelegramIcon} alt="" /> Telegram
        </a>
      </footer>
    </main>
  );
};
