// Import's
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Asset's
import styles from "./Skills.module.css";
import skill from "../../assets/skill.svg";
import html from "../../assets/languages/html.svg";
import css from "../../assets/languages/css.svg";
import js from "../../assets/languages/js.svg";
import ts from "../../assets/languages/ts.svg";
import node from "../../assets/languages/nodejs.svg";
import react from "../../assets/languages/react.svg";
import next from "../../assets/languages/next.svg";
import prisma from "../../assets/languages/prisma.svg";
import sass from "../../assets/languages/sass.svg";
import mysql from "../../assets/databases/mysql.svg";
import postgres from "../../assets/databases/postgres.svg";
import mongo from "../../assets/databases/mongo.svg";
import vuejs from "../../assets/languages/vue.svg";
import graphql from "../../assets/languages/graphql.svg";
import vscode from "../../assets/tools/vscode.svg";
import vs from "../../assets/tools/vs.svg";
import neovim from "../../assets/tools/neovim.svg";
import photoshop from "../../assets/tools/photoshop.svg";
import xd from "../../assets/tools/xd.svg";
import figma from "../../assets/tools/figma.svg";
import git from "../../assets/tools/git.svg";

const Skills = () => {
  return (
    <section className={styles.skills}>
      <div className={styles.skillsContent}>
        <h2 data-aos="fade-up-right" data-aos-duration="1000">WHAT I DO</h2>
        <h1 data-aos="fade-up-left" data-aos-duration="1200">SPECIALIZING IN</h1>

        <div data-aos="flip-up" data-aos-duration="2000" className={styles.skillsArea}>
          <div className={styles.topArea}>
            <Image data-aos="fade-right" data-aos-duration="2300" src={skill} alt="" />
            <h3 data-aos="fade-left" data-aos-duration="2300">Web <br /> Developer</h3>
          </div>
          <div className={styles.downArea}>
            <div className={styles.technologies}>
              <p data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1500">Technogies</p>
              <div data-aos="zoom-out-right" data-aos-duration="2500" className={styles.technologiesImage}>
                <Image src={html} alt="" />
                <Image src={css} alt="" />
                <Image src={js} alt="" />
                <Image src={ts} alt="" />
                <Image src={node} alt="" />
                <Image src={react} alt="" />
                <Image src={next} alt="" />
                <Image src={prisma} alt="" />
                <Image src={sass} alt="" />
              </div>
            </div>

            <div className={styles.databases}>
              <p data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1500">Databases</p>
              <div data-aos="zoom-out-right" data-aos-duration="2500" className={styles.databasesImage}>
                <Image src={mysql} alt="" />
                <Image src={postgres} alt="" />
                <Image src={mongo} alt="" />
              </div>
            </div>

            <div className={styles.studying}>
              <p data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1500">Studying</p>
              <div data-aos="zoom-out-right" data-aos-duration="2500" className={styles.studyingImage}>
                <Image src={vuejs} alt="" />
                <Image src={graphql} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills;
