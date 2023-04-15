import { NextPage } from "next";
import { Layout } from "../../layouts/default";
import Seo from "../../components/general/Seo";
import CTA from "../../components/general/CTA";
import Hero from "../../components/post/Hero";
import Main from "../../components/post/Main";
import Link from "next/link";

const Hydration: NextPage = () => {
  const blogData = [
    {
      id: 1,
      header: ``,
      body: (
        <div>
          <p className="my-3">
            Infertility is not a sweet word by any standard. Neither is its
            sister word, sterility. In fact, the only time I ever heard
            sterility used with something positive was where it was used in
            relation to mosquitoes.
          </p>
          <p className="my-3">
            Remember those tiny insects always committing crimes against
            humanity? Scientists are trying to exterminate them by sterilizing
            all their males. Without baby mosquitoes being hatched, soon the
            adult ones will die without a replacement. Then the world will
            become a better place.
          </p>
        </div>
      ),
    },
    {
      id: 2,
      header: `Infertility Is Not Always the Woman’s Fault`,
      body: (
        <div>
          <p className="my-3">
            This fact should be obvious to everyone, shouldn’t it? I mean, it
            takes two to tangle. If tangling fails to work, the fault can come
            from either of the two, can’t it? In fact, statistics show that
            women and men account for the same percentage of infertility, each
            contributing 40 percent. Of the remaining 20 percent, 10 percent is
            caused jointly by women and men, and the other 10 percent is caused
            by unknown factors.
          </p>
          <p className="my-3">
            See, it’s not always the woman’s fault. Yet, in many communities
            especially in Africa, women are shamed and tormented for infertility
            when the cause may even be from the man.
          </p>
        </div>
      ),
    },
    {
      id: 3,
      header: `Man May Be the Cause Without Knowing`,
      body: (
        <div>
          <p className="my-3">
            Many men think as long as they can achieve a good erection, they are
            in order. This is not true. During sex, other things need to be in
            place for the man to be able to make a woman pregnant. When a man
            ejaculates – or releases – into the woman, he puts semen into her
            vagina. Semen contains sperms which are the real deal. You know,
            they are the ones who will eventually nominate one of them to go and
            fertilize the woman’s egg. Not quite simple, though. The sperms are
            not that nice to one another. There are usually millions of them
            competing for that grand price. It’s a survival-of-the-fittest kind
            of thing where the strongest, healthiest and fastest sperm cell
            makes it to the woman’s egg.
          </p>
          <p className="my-3">
            That’s where it gets tricky. Many men think as long as they can have
            an erection and release into the woman, they’ve sent millions of
            sperm cells into the ring to dig it out with one another and produce
            the last man standing who will then fertilize the egg. It’s not
            always that way, though. Sometimes the fluid that comes out of the
            man’s penis during sex may not have enough number of sperm cells.
            There may be only few physically normal sperm cells, or only a few
            that can swim fast enough to make it to the egg before they die. All
            these things will be checked by the doctor before the man can say
            for sure whether he is not the cause.
          </p>
        </div>
      ),
    },
    {
      id: 4,
      header: `You May Not Be Having Enough Sex`,
      body: (
        <div>
          <p className="my-3">
            Many men think as long as they can achieve a good erection, they are
            in order. This is not true. During sex, other things need to be in
            place for the man to be able to make a woman pregnant. When a man
            ejaculates – or releases – into the woman, he puts semen into her
            vagina. Semen contains sperms which are the real deal. You know,
            they are the ones who will eventually nominate one of them to go and
            fertilize the woman’s egg. Not quite simple, though. The sperms are
            not that nice to one another. There are usually millions of them
            competing for that grand price. It’s a survival-of-the-fittest kind
            of thing where the strongest, healthiest and fastest sperm cell
            makes it to the woman’s egg.
          </p>
          <p className="my-3">
            That’s where it gets tricky. Many men think as long as they can have
            an erection and release into the woman, they’ve sent millions of
            sperm cells into the ring to dig it out with one another and produce
            the last man standing who will then fertilize the egg. It’s not
            always that way, though. Sometimes the fluid that comes out of the
            man’s penis during sex may not have enough number of sperm cells.
            There may be only few physically normal sperm cells, or only a few
            that can swim fast enough to make it to the egg before they die. All
            these things will be checked by the doctor before the man can say
            for sure whether he is not the cause.
          </p>
        </div>
      ),
    },
    {
      id: 5,
      header: `You May Not Be Having Enough Sex`,
      body: (
        <div>
          <p className="my-3">
            You read that right. Infertility is defined medically as the
            inability to achieve pregnancy after at least one year of adequate,
            unprotected sexual intercourse. Many people assume they know what
            adequate sex is. Medically, adequate sex is defined as having
            unprotected vaginal sex between 3 to 5 days every week. Remember,
            you’re going to be having it like that for a whole year. Of course,
            you won’t be using condoms or any other methods of contraception
            during this whole year. If you still fail to conceive, that’s when
            doctors can describe you as being infertile.
          </p>
          <p className="my-3">
            Now you know that you can’t start having sex for only six months and
            run to the hospital or your village people and be shouting
            everywhere that you’re infertile. Before you do that, check very
            well to see if you’re having adequate sex.
          </p>
        </div>
      ),
    },
    {
      id: 5,
      header: `Infertility Can Be Treated`,
      body: (
        <div>
          <p className="my-3">
            One of the reasons people fear infertility is that they think it may
            not be something doctors can treat. This is not true. Usually, there
            are several factors that can cause infertility. When you see your
            doctors, they will ask you a number of questions in order to probe
            which factor or combination of factors may be causing your
            infertility. After that, they will ask you to do some tests to check
            your body. All these steps will help them to know what is causing
            your condition. Treatment options exist for many of the causes of
            infertility.
          </p>
          <p className="my-3">
            The problem people sometimes have is that they stroll into the
            hospital and expect the doctors to give them one magic tablet that
            will fix everything. There is no such thing. Doctors rely on what
            they know about how your body works normally to achieve pregnancy.
            Tests exist that can be used to show if all the parts of your body
            involved in becoming pregnant are working well. The treatment they
            will give you depends on which part of the process is not working
            well.
          </p>
          <p className="my-3">
            However, remember that about 10 percent of cases of infertility are
            caused by unknown factors. This means that doctors will do all their
            tests and find nothing wrong with the man and woman. Yet, they may
            still be unable to achieve pregnancy. You can blame your village
            people for that if you want, but doctors believe with more
            advancement in medical science, tests may become available that can
            help with those unexplained cases. Perhaps, at that time, their
            treatment will also be discovered.
          </p>
        </div>
      ),
    },
    {
      id: 5,
      header: `Infertility May Be Primary or Secondary`,
      body: (
        <div>
          <p className="my-3">
            Most times, observers only know whether or not a couple has
            children. They don’t know if the woman has been having miscarriages.
            Medically, doctors classify infertility into two types – primary or
            secondary. Primary infertility implies that the couple has never
            achieved pregnancy even once in all their lives. This means the
            woman has never had a miscarriage or delivered a baby that was born
            dead, whether in the course of her marriage or at any other time in
            her life. It also means that the man has never made any woman
            pregnant at any time of his life.
          </p>
        </div>
      ),
    },
    {
      id: 3,
      header: ``,
      body: (
        <div>
          <p className="my-3">
            On the other hand, secondary infertility implies that the person
            concerned has achieved pregnancy before regardless of its outcome.
            For example, a couple who had a child and are then having difficulty
            achieving pregnancy would be described as being secondarily
            infertile. Also, if they’re achieving pregnancies but only losing
            them and being unable to have babies, they’re not considered
            infertile. The cause of the losses of pregnancy will be investigated
            and treated accordingly, after which they should be able to have a
            successful pregnancy.
          </p>
          <p className="my-3">
            If you have further questions about this topic or you would like to
            speak with a doctor, please
            <Link legacyBehavior href="https://patient.stabledoc.com/auth">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-semibold text-primary cursor-pointer"
              >
                Click here
              </a>
            </Link>
          </p>
        </div>
      ),
    },
  ];
  return (
    <Layout>
      <Seo templateTitle="Five Facts You Never Knew About Infertility" />
      <Hero
        title="Five Facts You Never Knew About Infertility"
        datePosted="April 15, 2023"
        author=" Dr Msonter Anzaa"
      />
      <Main
        blogImage="/img/blog-images/infertility.jpg"
        summary={`Infertility is not a sweet word by any standard. Neither is its
            sister word, sterility. In fact, the only time I ever heard
            sterility used with something positive was where it was used in
            relation to mosquitoes.`}
        blogData={blogData}
      />
      <CTA />
    </Layout>
  );
};
export default Hydration;
