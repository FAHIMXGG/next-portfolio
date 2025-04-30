import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Cover = () => {
  return (
    <div className=" bg-[#0F1729] py-32 lg:px-36 p-5 " id="about">
      <MaxWidthWrapper>
        <div className="lg:flex items-center gap-40">
          <div className="">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt=""
            />
          </div>

          <div className="animate__slideInRight">
            <h1 className="text-4xl font-semibold text-white">
              Hi, I'm Ahasanul Haque
            </h1>
            <h1 className="text-2xl mb-5 text-[#1A9ED4] font-bold">
              Frontend Developer
            </h1>
            <p className="text-white">
              Hello, I am Ahasanul Haque. I love Programming, making web
              Application. I started programming as a hobby since 2017. Wrote my
              first program by using PHP. Later I learned JavaScript, Worked in
              several libraries & frameworks like ReactJS, NextJS, worked using
              several technologies like Git. It does feel amazing to see myself
              improving. Hope to improve everything around me one day
            </p>

            <div>
              <div className="flex gap-5 mt-5">
                <a
                  href="https://drive.google.com/file/d/165onGPsFU5wvf6-ikHlycGol8H7V51Vn/view?usp=sharing"
                  target="_blank"
                >
                  <button className="bg-[#3ABFF8] text-[#0F1729] font-bold px-2 py-1 rounded-sm hover:shadow-lg hover:shadow-[#1A9ED4]">
                    View Resume
                  </button>
                </a>
                {/* <button className='bg-[#3ABFF8] text-[#0F1729] font-bold px-2 py-1 rounded-sm'>More About Me</button> */}
                {/* You can open the modal using ID.showModal() method */}
                <Dialog>
                  <DialogTrigger className="bg-[#3ABFF8] text-[#0F1729] font-bold px-2 py-1 rounded-sm hover:shadow-lg hover:shadow-[#1A9ED4]">
                    More About Me
                  </DialogTrigger>
                  <DialogContent className="bg-[#0F1729] text-white border-none w-[90vw] max-w-4xl">
                    <DialogHeader className="w-full">
                      <DialogTitle className="font-bold text-lg flex items-center gap-2">Hello there!👋🏼</DialogTitle>
                      <DialogDescription className="text-white/70">
                        <p className="">
                          {" "}
                          My name is Ahasanul Haque, and I am a dedicated MERN
                          stack developer with valuable recent experience in
                          WordPress. Programming and web development have been
                          my passions since 2017, and I've been on an incredible
                          journey of growth ever since.
                        </p>
                        <p className="">
                          I possess a strong foundation in web development,
                          starting with PHP and expanding my knowledge to
                          JavaScript. Along the way, I have worked extensively
                          with various libraries and frameworks, including
                          ReactJS and NextJS. These tools have empowered me to
                          create dynamic and engaging web applications that
                          provide exceptional user experiences.
                        </p>
                        <p className="">
                          My recent focus has been on WordPress, where I have
                          gained valuable expertise. I take pride in my ability
                          to develop custom themes, plugins, and websites
                          tailored to meet the unique needs of clients.
                          Understanding the architecture and ecosystem of
                          WordPress allows me to optimize performance, enhance
                          security, and ensure seamless functionality for users.
                        </p>
                        <p className="">
                          In addition to my technical skills, I am well-versed
                          in utilizing version control systems like Git,
                          enabling efficient collaboration and maintaining code
                          integrity throughout development cycles. I am
                          constantly learning and staying updated with the
                          latest industry trends and best practices, as I
                          believe continuous improvement is essential in this
                          ever-evolving field.
                        </p>
                        <p className="">
                          As a developer, I am known for my strong
                          problem-solving abilities and a commitment to
                          delivering high-quality solutions. I thrive in team
                          environments, collaborating with others to achieve
                          shared goals and create exceptional digital
                          experiences. My versatility in seamlessly integrating
                          the MERN stack with my WordPress expertise makes me a
                          valuable asset to any development team.
                        </p>
                        <p className="">
                          With a genuine passion for programming and a
                          relentless drive for excellence, I am determined to
                          contribute to the success of future web projects and
                          push the boundaries of innovation in web development.
                          I am excited about the endless possibilities this
                          field offers and look forward to making a positive
                          impact through my work.
                        </p>
                        <p className="">
                          Thank you for taking the time to learn a little bit
                          about me. I am eager to embark on new challenges and
                          bring my skills and enthusiasm to your next project.
                        </p>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
              <div className="mt-5 flex gap-3">
                <a href="https://www.facebook.com/FAHIMX007/" target="_blank">
                  <button className="text-3xl  hover:border-[#1A9ED4] rounded-full hover:shadow-lg hover:shadow-[#1A9ED4]"></button>
                </a>
                <a href="https://twitter.com/fahim2259" target="_blank">
                  <button className="text-3xl  hover:border-[#1A9ED4] rounded-full hover:shadow-lg hover:shadow-[#1A9ED4]"></button>
                </a>
                <a href="https://www.linkedin.com/in/fahimx/" target="_blank">
                  <button className="text-3xl  hover:border-[#1A9ED4] rounded-full hover:shadow-lg hover:shadow-[#1A9ED4]"></button>
                </a>
                <a href="https://github.com/FAHIMXGG" target="_blank">
                  <button className="text-3xl  hover:border-[#1A9ED4] rounded-full hover:shadow-lg hover:shadow-[#1A9ED4]"></button>
                </a>
                <a
                  href="https://discord.com/users/405654158901903361"
                  target="_blank"
                >
                  <button className="text-3xl  hover:border-[#1A9ED4] rounded-full hover:shadow-lg hover:shadow-[#1A9ED4]"></button>
                </a>
                <a href="https://wa.link/a8gcn6" target="_blank">
                  <button className="text-3xl  hover:border-[#1A9ED4] rounded-full hover:shadow-lg hover:shadow-[#1A9ED4]"></button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Cover;
