"use client";
import { footerSections } from "@/data/footer";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Button from "../ui/Button";
import Container from "../ui/Container";
import { usePathname } from "next/navigation";
import Accordion from "../ui/Accordion";

export default function Footer() {
  const pathname = usePathname();
  const isAuth = pathname.includes("/auth");
  const isOnboarding = pathname.startsWith("/onboarding");

  if (isAuth || isOnboarding) return null;

  return (
    <footer className="w-full pt-10 bg-[#3AA9DC]">
      <Container className="px-4 sm:px-6">
        <div className="relative z-10 flex justify-between rounded-[20px] bg-[#E8F6FC] lg:px-6 lg:py-8">
          <div className="hidden lg:block">
            <p className="font-tradegothic leading-13.5 w-92 mb-6 text-[44px] font-bold">
              Subscribe Newsletter
            </p>
            <p className="font-tradegothic text-[20px] font-bold">The Travel</p>
            <p className="mb-3.75 text-[16px] font-medium text-[#112211]/70">
              Get inspired! Receive travel discounts, tips and behind the scenes
              stories.
            </p>
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="h-14 w-full max-w-118.25 rounded-sm bg-white pl-4 text-[16px]"
              />
              <Button
                type="submit"
                onClick={() => {}}
                variant="secondary"
                className="bg-black! h-14 text-white!"
              >
                Subscribe
              </Button>
            </form>
          </div>

          <Image
            src="/assets/images/emojione-v1_open-mailbox-with-lowered-flag.png"
            alt=""
            width={400}
            height={400}
            className="hidden h-auto w-100 lg:block"
          />
        </div>

        <div className="pt-12 pb-16 md:flex md:gap-20">
          <div className="mb-8 md:mb-0">
            <div className="relative mb-6 h-25 w-25">
              <Image
                src="/assets/images/MTTLogo.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>

            <div className="flex items-center gap-3">
              <FaFacebook size={20} />
              <FaTwitter size={20} />
              <FaYoutube size={20} />
              <FaInstagram size={20} />
            </div>
          </div>

          <div className="hidden xl:flex gap-6">
            {footerSections.map((section) => (
              <div key={section.title} className="flex flex-col gap-4">
                <h1 className="font-tradegothic text-[16px] font-bold">
                  {section.title}
                </h1>
                <div className="flex flex-col gap-3">
                  {section.links.map((link, i) => (
                    <Link
                      key={i}
                      href={link.href}
                      className="min-w-[175.2px] text-[14px] text-[#112211]/70"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="xl:hidden w-full">
            {footerSections.map((section) => (
              <Accordion
                key={section.title}
                title={section.title}
                defaultOpen={false}
              >
                <div className="flex flex-col gap-3 pb-4">
                  {section.links.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="text-[14px] text-[#112211]/70"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </Accordion>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
