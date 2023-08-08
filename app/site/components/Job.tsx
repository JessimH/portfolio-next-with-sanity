// app/components/Job.tsx

import Image from "next/image";
import { getJob } from "@/sanity/sanity.query";
import { PortableText } from "@portabletext/react";
import type { JobType } from "@/types";

export default async function Job() {
  const job: JobType[] = await getJob();
  console.log(job);

  return (
    <section className="mt-8">
      <div className="mb-16">
        <h2 className="font-semibold text-4xl mb-4">Work Experience</h2>
      </div>

      <div className="flex flex-col gap-y-12">
        {job.map((data) => (
          <div
            key={data._id}
            className="flex items-start lg:gap-x-6 gap-x-4 max-w-2xl relative before:absolute before:bottom-0 before:top-[4.5rem] before:left-7 before:w-[1px] before:h-[calc(100%-50px)] before:bg-emerald-900"
          >
            <a
              href={data.url}
              rel="noreferrer noopener"
              className="min-h-[60px] min-w-[60px] rounded-md overflow-clip relative"
            >
              <Image
                src={data.logo}
                className="object-cover"
                alt={`${data.name} logo`}
                fill
              />
            </a>
            <div className="flex flex-col items-start">
              <h3 className="text-xl font-bold">{data.name}</h3>
              <p>{data.jobTitle}</p>
              <small className="text-sm text-emerald-900 mt-2 tracking-widest uppercase">
                {data.startDate.toString()} - {data.endDate.toString()}
              </small>
              <ul className="flex flex-wrap items-center gap-3 mt-4">
                {data.skills?.map((skill, id) => (
                  <li
                    key={id}
                    className="bg-emerald-100 border border-transparent rounded-md px-2 py-1 text-emerald-900"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}