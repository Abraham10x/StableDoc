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
      header: `What is Prostate?`,
      body: (
        <div>
          <p className="my-3">
            The prostate is a small gland about the size and shape of a walnut.
            Never mind if you don't even know what a walnut is. The point to be
            made is that your prostate is small and roughly shaped like an
            inverted cone or inverted pyramid. It is located at the neck of your
            urinary bladder. The prostate secretes biochemical substances called
            hormones. It also secretes semen. Semen is a component of the fluid
            that comes out of your penis when you ejaculate. We routinely refer
            to the ejaculate as sperm but it contains more than sperm cells. It
            also contains semen or seminal fluid. Seminal fluid contains a
            number of substances including glucose which gives energy to the
            sperm cells to keep them alive and active even after leaving the
            testes.
          </p>
          <p className="my-3">
            The prostate is important, isn't it? Well, like other important
            parts of our bodies, we usually pay very little attention to it when
            it is working well until when trouble bursts. For most people,
            that's only when they pay attention to their prostate. Indeed, for
            many, the first time they learn about their prostate is when it gets
            into trouble. You don't have to be like that. You can pay attention
            to your prostate and save yourself from problems that begin to set
            in when you age. Below are two things that can happen to your
            prostate and how they affect your life.
          </p>
        </div>
      ),
    },
    {
      id: 2,
      header: `Your Prostate Can Enlarge and Make Urinating Difficult`,
      body: (
        <div>
          <p className="my-3">
            If you've lived closely with an elderly man, you may have noticed
            that they often have problems with urinating. They usually may not
            be able to hold their urine once they feel pressed. One moment, they
            say they are pressed. The next moment, even before they finish
            unzipping their trousers, they have started peeing in them. They may
            also be urinating frequently, but having to strain and hesitate
            before their urine comes out. Although many elderly males may
            experience these symptoms, rarely do they or their caregivers
            realize what is going on. They just assume old age is taking its
            toll on the man. While they are partly correct, that's not the whole
            truth. Often times, the prostate is involved.
          </p>
          <p className="my-3">
            Your prostate can enlarge in size. There is no clear medical
            explanation for why this happens in some people and not in others,
            but a pattern has been identified.
          </p>
          <p className="my-3">
            First, it is known to happen only in males. This is to be expected,
            isn't it? Only males have prostates, you know. Second, your prostate
            tends to enlarge as you cross your sixtieth birthday. I don't mean
            it can't start getting bigger at a younger age, but this happens
            more commonly after age sixty. Third, your prostate is more likely
            to enlarge if you have a family history of enlarged prostates. That
            is to say your father or brothers have an enlarged prostate. With
            extended family members, the chances are slimmer.
          </p>
          <p className="my-3">
            Now, back to the enlargement. When your prostate enlarges, it
            presses on the neck of your bladder and your urethra. The urethra is
            a small tube-like structure that connects your bladder to the
            outside via your penis. It's that tube that conveys urine from the
            bladder and semen to the outside. With this pressure on the neck of
            your bladder and urethra, the space for urine to pass is reduced.
            This leads to the following symptoms.
          </p>
          <p className="my-3">
            <span className="font-bold">Hesitancy:</span> This means your urine
            hesitates before coming out. You feel pressed to urinate. You hurry
            to the toilet and unzip. Suddenly, your urine seems to think twice
            about coming out.
          </p>
          <p className="my-3">
            <span className="font-bold">Straining:</span> Here, even when the
            urine starts to come out, it comes out so reluctantly that you have
            to strain in order to put pressure on your bladder and literally
            squeeze the urine out.
          </p>
          <p className="my-3">
            <span className="font-bold">Poor Stream:</span> Given that the
            passage for your urine is reduced, the flow of the urine from your
            penis is no longer as quick and straight. Rather, it flows slowly
            and sort of merely trickles from your penis.
          </p>
          <p className="my-3">
            <span className="font-bold">Terminal Dribbling:</span>
            When you are about to finish urinating, the last volume of urine to
            come out merely trickles from your penis right in front of you.
          </p>
          <p className="my-3">
            <span className="font-bold">Feeling of Incomplete Voiding:</span>
            Feeling of Incomplete Voiding. This is the feeling of still having
            urine in your bladder even after you've just finished urinating.
            This feeling is true because your bladder is no longer able to empty
            itself completely.
          </p>
          <p className="my-3">
            <span className="font-bold">Urinary Retention:</span>
            Sometimes, everything grinds to a standstill and you can't even
            urinate at all. When this develops, your bladder keeps filling with
            urine and distending itself. As it does so, it causes tremendous
            pain coupled with the torture of desiring to urinate but being
            unable.
          </p>
        </div>
      ),
    },
    {
      id: 3,
      header: `Your Prostate can Develop Cancer`,
      body: (
        <div>
          <p className="my-3">
            In some cases, after enlarging, your prostate can deteriorate even
            further and develop a cancer. You will experience the symptoms of an
            enlarged prostate as well as those of the cancer. Doctors usually
            refer to the condition of the enlarged but noncancerous prostate as
            benign prostatic hypertrophy (BPH). When it becomes cancerous, they
            refer to it as carcinoma of the prostate or simply cancer of the
            prostate. Again, if you have family members who have had prostate
            cancer, your chances of having the condition are higher. In contrast
            to BPH, your prostate can start developing a cancer from your
            eightieth birthday.
          </p>
          <p className="my-3">
            Apart from the urinary symptoms, prostate cancer can have various
            other symptoms depending on where it spreads to. Most people will
            experience waist pain, difficulty passing stool and so on.
          </p>
        </div>
      ),
    },
    {
      id: 4,
      header: `What to Do for Your Prostate`,
      body: (
        <div>
          <p className="my-3">
            Your prostate is one scenario where merely paying attention may save
            you a lot of cost. It is recommended that all males from the age of
            forty should pay attention to their prostate by monitoring their
            urinary habits. As they age further, a routine medical check at
            intervals including an assessment of their prostate is quite
            helpful. Those who have a higher likelihood of developing a prostate
            condition should pay even greater attention.
          </p>
          <p className="my-3">
            Sadly, there is no intervention that can summarily stop a male from
            developing a prostate condition. However, if an enlarging prostate
            is detected early, medical and surgical interventions exist that can
            slow down its enlargement. In some cases, your doctor may perform a
            surgical operation to remove your prostate. However, if not detected
            early until cancer develops, the options become very limited and the
            outcome too less rewarding.
          </p>
        </div>
      ),
    },
  ];
  return (
    <Layout>
      <Seo templateTitle="2 Things That Can Happen to Your Prostate and How They Affect Your Life as a Man" />
      <Hero
        title="2 Things That Can Happen to Your Prostate and How They Affect Your Life as a Man"
        datePosted="May 08, 2023"
        author=" Dr Msonter Anzaa"
      />
      <Main
        blogImage="/img/blog-images/prostate.jpg"
        summary={`If you are like most men, you probably haven't even 
        heard the word prostate, let alone knowing that you have one. 
        And please, note that the word is p-r-o-s-t-a-t-e and not 
        p-r-o-s-t-R-a-t-e! Sadly, with your prostate, the saying that 
        what you don't know can't hurt you does not apply. In fact, the 
        reverse is the case here, as not knowing or paying adequate 
        attention to your prostate can affect your life significantly.`}
        blogData={blogData}
      />
      <CTA />
    </Layout>
  );
};
export default Hydration;
