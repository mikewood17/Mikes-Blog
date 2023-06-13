import Image from "next/image";
import Link from "next/link";
import { WEBSITE_URL } from "config";

async function getMessage() {
  const res = await fetch(`${WEBSITE_URL}/api/greet`, { next: { revalidate: 5 } });
  return res.json();
}

export default async function Home() {
  const message = getMessage();

  return (
    <main>
      <div className="container content contentWidth">
        <h1 className="heading">Mikes Personal Home Page</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis ullamcorper leo. Aenean mattis eros nec lorem
          porttitor laoreet. Praesent ut interdum orci, et elementum nibh. Cras ac lorem pharetra, mollis augue vel, eleifend
          velit. In lacinia bibendum pharetra. Sed vulputate nisi nisi, et vestibulum elit porta quis. Aenean ac ex dolor.
          Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque placerat ultrices
          ultrices. Vivamus ullamcorper, urna eu vestibulum hendrerit, felis augue ultrices quam, eget dapibus mauris neque
          non mi. Aliquam in odio ultricies, suscipit magna id, laoreet justo. Nulla auctor purus lobortis massa viverra
          interdum. Aliquam quis mollis nunc. Sed aliquet condimentum erat. Suspendisse potenti.
        </p>
        <br />
        <p>
          In hac habitasse platea dictumst. Curabitur gravida sed justo a maximus. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos. Aliquam vulputate ipsum sit amet dapibus blandit. Proin et
          venenatis nibh. Suspendisse varius feugiat massa sed rutrum. Etiam venenatis augue id nibh porttitor, at faucibus
          neque placerat. Donec quis mauris viverra leo venenatis pharetra consequat ut purus. Phasellus non consequat lorem.
          Nam sollicitudin rutrum turpis, et lobortis dolor pretium vel.
        </p>
      </div>
      <div className="banner">
        <div className="bannerInfo">
          <div className="bannerContent">
            <h2>Destiny 2 Builds</h2>
            <p>
              One of my biggest passions is gaming, primarily on Destiny 2 created by Bungie. head over to the blog section
              to have a look at some made by popular content creators in the Destiny 2 community.
            </p>
            <div className="bannerActions">
              <Link href="/blog" className="bannerBtn btn">
                Builds
              </Link>
            </div>
          </div>
        </div>
        <div className="bannerImgContainer">
          <Image src="/images/SS-hero.jpg" alt="bannerImage" className="bannerImg" width="800" height="800"></Image>
        </div>
      </div>
      <div className="container content contentWidth">
        <h1 className="heading">Lorem ipsum dolor</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis ullamcorper leo. Aenean mattis eros nec lorem
          porttitor laoreet. Praesent ut interdum orci, et elementum nibh. Cras ac lorem pharetra, mollis augue vel, eleifend
          velit. In lacinia bibendum pharetra. Sed vulputate nisi nisi, et vestibulum elit porta quis. Aenean ac ex dolor.
          Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque placerat ultrices
          ultrices. Vivamus ullamcorper, urna eu vestibulum hendrerit, felis augue ultrices quam, eget dapibus mauris neque
          non mi. Aliquam in odio ultricies, suscipit magna id, laoreet justo. Nulla auctor purus lobortis massa viverra
          interdum. Aliquam quis mollis nunc. Sed aliquet condimentum erat. Suspendisse potenti.
        </p>
        <br />
        <p>
          In hac habitasse platea dictumst. Curabitur gravida sed justo a maximus. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos. Aliquam vulputate ipsum sit amet dapibus blandit. Proin et
          venenatis nibh. Suspendisse varius feugiat massa sed rutrum. Etiam venenatis augue id nibh porttitor, at faucibus
          neque placerat. Donec quis mauris viverra leo venenatis pharetra consequat ut purus. Phasellus non consequat lorem.
          Nam sollicitudin rutrum turpis, et lobortis dolor pretium vel.
        </p>
      </div>
    </main>
  );
}
