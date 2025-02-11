'use client'

import Link from "next/link";
import { Facebook, Instagram, Twitter, Github, Youtube } from "lucide-react";
import React from "react";

const navigation = [
  { name: "Facebook", href: "#", icon: Facebook },
  { name: "Instagram", href: "#", icon: Instagram },
  { name: "X", href: "#", icon: Twitter },
  { name: "GitHub", href: "#", icon: Github },
  { name: "YouTube", href: "#", icon: Youtube },
];

export default function Footer() {
  return (
    <footer className=" py-8">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-gray-400 text-sm">&copy; 2025 Your Company, Inc. All rights reserved.</p>
        <div className="flex gap-6">
          {navigation.map(({ name, href, icon: Icon }) => (
            <Link key={name} href={href} className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">{name}</span>
              <Icon className="size-6" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
