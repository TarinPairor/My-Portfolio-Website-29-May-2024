import React from "react";
import Link from "next/link";
import Image from "next/image";

export abstract class Project {
  abstract title: string;
  abstract description: string;
  abstract content: string[];
  image?: string;
  abstract link: string;

  render(): JSX.Element {
    return (
      <div className="flex flex-col my-10">
        <h2 className="text-4xl font-extrabold hover:scale-110 hover:translate-x-10">
          {this.link ? (
            <Link href={this.link} legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                {this.title}
              </a>
            </Link>
          ) : (
            this.title
          )}
        </h2>
        <p className=" hover:text-slate-600">{this.description}</p>
        {this.image && (
          <div className="z-10">
            <Image
              src={this.image}
              alt={this.title}
              className="my-4"
              height={1000}
              width={1000}
            />
          </div>
        )}
        <ul className="list-disc pl-5 font-semibold space-y-4">
          {this.content.map((item, index) => (
            <li className="m-1" key={index}>
              {item}
            </li>
          ))}
        </ul>
        {/* {this.link && (
          <Link href={this.link} className="text-blue">
            Read More
          </Link>
        )} */}
      </div>
    );
  }
}
