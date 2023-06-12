import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="">
      <div className="container content aboutWrapper">
        <h1>About Me</h1>
        <div className="aboutMeContainer">
          <Image className="meImg" src="/images/about-me.GIF" height="300" width="300" alt="me"></Image>
          <p className="meTxt">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis ullamcorper leo. Aenean mattis eros nec lorem
            porttitor laoreet. Praesent ut interdum orci, et elementum nibh. Cras ac lorem pharetra, mollis augue vel,
            eleifend velit. In lacinia bibendum pharetra. Sed vulputate nisi nisi, et vestibulum elit porta quis. Aenean ac
            ex dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque placerat
            ultrices ultrices. Vivamus ullamcorper, urna eu vestibulum hendrerit, felis augue ultrices quam, eget dapibus
            mauris neque non mi. Aliquam in odio ultricies, suscipit magna id, laoreet justo. Nulla auctor purus lobortis
            massa viverra interdum. Aliquam quis mollis nunc. Sed aliquet condimentum erat.
          </p>
        </div>
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
          <Image src="/images/arc-hunter.png" alt="bannerImage" className="bannerImg" width="800" height="800"></Image>
        </div>
      </div>
      <div className="container content contentWidth">
        <h1>Lorem ipsum dolor</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis ullamcorper leo. Aenean mattis eros nec lorem
          porttitor laoreet. Praesent ut interdum orci, et elementum nibh. Cras ac lorem pharetra, mollis augue vel, eleifend
          velit. In lacinia bibendum pharetra. Sed vulputate nisi nisi, et vestibulum elit porta quis. Aenean ac ex dolor.
          Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque placerat ultrices
          ultrices. Vivamus ullamcorper, urna eu vestibulum hendrerit, felis augue ultrices quam, eget dapibus mauris neque
          non mi. Aliquam in odio ultricies, suscipit magna id, laoreet justo. Nulla auctor purus lobortis massa viverra
          interdum. Aliquam quis mollis nunc. Sed aliquet condimentum erat. Suspendisse potenti. In hac habitasse platea
          dictumst. Curabitur gravida sed justo a maximus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Aliquam vulputate ipsum sit amet dapibus blandit. Proin et venenatis nibh.
          Suspendisse varius feugiat massa sed rutrum. Etiam venenatis augue id nibh porttitor, at faucibus neque placerat.
          Donec quis mauris viverra leo venenatis pharetra consequat ut purus. Phasellus non consequat lorem. Nam
          sollicitudin rutrum turpis, et lobortis dolor pretium vel. Quisque vel pretium nisi. Nullam lobortis felis sit amet
          molestie gravida. Suspendisse mattis fringilla pretium. Mauris vel sodales magna. Pellentesque vel nunc id velit
          blandit ultrices sit amet pellentesque nibh. Phasellus nec iaculis lacus. Morbi in dui vehicula, interdum nisi eu,
          commodo odio. Pellentesque cursus nisi in lacinia pulvinar. Nunc et ipsum vitae justo congue tempor. Aenean
          convallis lacinia eros, a luctus purus auctor in. Aenean dignissim vel eros a tempor. Nulla massa eros, fermentum
          ut enim at, luctus consectetur risus. Quisque sodales est at felis consequat dictum. Quisque sit amet nibh velit.
        </p>
      </div>
    </div>
  );
}
