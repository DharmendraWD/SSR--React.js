import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faArrowRight, faTimes } from "@fortawesome/free-solid-svg-icons";
import img1 from "../src/image/blog/1.jpg"
import img2 from "../src/image/blog/2.jpg"
import img3 from "../src/image/blog/3.jpg"

const blogData = [
    {
        "id": 11,
        "title": "Puwa Khola- 1 Hydropower Appoints LS Capital as IPO Issue Manager",
        "content": "<p><span style=\"color: lab(27.1134 -0.956401 -12.3224);\"><strong>Puwa Khola- 1 Hydropower</strong> Limited has appointed LS Capital Limited as the <strong>IPO issue </strong>and sales manager for issuing 19,46,660 ordinary shares to the general public at a face value of Rs 100 per share. </span></p><p></p><p><span style=\"color: lab(27.1134 -0.956401 -12.3224);\">The agreement was signed by Managing Director Mr. Kadam KC on behalf of <strong>PuwaKhola-1 Hydropower </strong>and <em>Mr. Bijaya Lal Shrestha</em>, Chief Executive Officer on behalf of Laxmi Sunrise Capital Limited. Puwa Khola- 1 Hydropower Limited's 4 MW Hydropower project located in Ilam district has been completed and put into operation.</span></p>",
        "cover_image":img1,
        "author_id": 7,
        "author_name": "Puwakhola",
        "created_at": "2026-03-15T07:25:19.000Z",
        "updated_at": "2026-03-15T07:28:12.000Z"
    },
    {
        "id": 12,
        "title": "PuwaKhola 1 Hydropower To Develop 21 MW Aayu Malun Khola Hydropower Project In Okhaldhunga",
        "content": "<p><span style=\"color: lab(27.1134 -0.956401 -12.3224);\"><strong>Puwa Khola 1 Hydropower</strong> Limited is going to build the 21 MW Aayu Malun Khola Hydropower Project in Okhaldhunga district. For this purpose, the company has already received the construction license from the Department of Electricity Development. </span></p><p></p><p><span style=\"color: lab(27.1134 -0.956401 -12.3224);\"> The department granted the construction permit to the company on Mangsir 6, 2079 BS. The license has a validity until Mangsir 5, 2114 BS. The department has provided the construction license to the promoter company on the basis of the environmental impact assessment report and study report of the project approved by the Ministry of Forest and Environment. </span></p><p></p><p><span style=\"color: lab(27.1134 -0.956401 -12.3224);\">Before issuing the license, the Department Of Electricity Development had issued a notice requesting the stakeholders to submit written opinions/suggestions within 35 days if there is any adverse impact due to the construction and operation of this project. The project is a run-of-the-river (ROR) type project. It will be built on the Malun River in Okhaldhunga district. Puwa Khola 1 Hydropower is currently operating a 4 MW Puwa Khola-1 Hydropower Project in Illam District. The project began commercial electricity production from Ashwin <strong>23, 2074 BS.</strong></span></p>",
        "cover_image": img2,
        "author_id": 7,
        "author_name": "Puwakhola",
        "created_at": "2026-03-15T07:26:58.000Z",
        "updated_at": "2026-03-15T07:26:58.000Z"
    },
    {
        "id": 13,
        "title": "पुवा खोला–वान हाईड्रोपावरले आईपीओ निष्कासन गर्ने",
        "content": "<p><span style=\"color: lab(27.1134 -0.956401 -12.3224);\">काठमाण्डौ । पुवा खोला–वान हाईड्रोपावर लिमिटेडले आईपीओ निष्कासन गर्ने भएको छ । कम्पनीले आईपीओ निष्कासनको प्रस्ताव पारित गर्न विशेष साधारण सभा डाकेको छ । उक्त विशेष सभा यही असार २७ गते काठमाण्डौको अनामनगरमा रहेको कम्पनीको कार्यालयमा बिहान ११ बजेदेखि सुरु हुनेछ । </span></p><p></p><p></p><p><span style=\"color: lab(27.1134 -0.956401 -12.3224);\">सभामा कम्पनीको आईपीओ निष्कासनको रकम वृद्धि गरी आईपीओ जारी गर्ने, आईपीओबाट प्राप्त पूँजीको उपयोगबारे निर्णय गर्ने र चुक्तापूँजी वृद्धिको उपयोगिताको विशेषमा निर्णय गर्ने जस्ता विशेष प्रस्तावहरु पारित गरिनेछन् । यस्तै कम्पनीको प्रबन्धपत्र तथा नियमावली संशोधन गर्ने प्रस्ताव समेत पारित गरिनेछ ।</span></p>",
        "cover_image": img3,
        "author_id": 7,
        "author_name": "Puwakhola",
        "created_at": "2026-03-15T07:27:40.000Z",
        "updated_at": "2026-03-15T07:27:40.000Z"
    }

];


const NewsBlog = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const openBlog = (blog) => {
    setSelectedBlog(blog);
    document.body.classList.add("no-scroll");
  };

  const closeBlog = () => {
    setSelectedBlog(null);
    document.body.classList.remove("no-scroll");
  };

  // ESC close
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") closeBlog();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  const formatDate = (date) =>
    new Date(date).toDateString();

  const stripHTML = (html) =>
    html.replace(/<[^>]+>/g, "").slice(0, 120) + "...";

  return (
    <>
      <section
        id="news"
        className="py-24 px-6 transition-colors duration-500"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className=" inline-block px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-bold mb-4">
              Latest Updates
            </span>
            <h2 className=" text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
              News & <span className="text-blue-500">Insights</span>
            </h2>
            <p className=" text-slate-500 dark:text-slate-400 mt-4 max-w-2xl mx-auto">
              Stay informed about our latest projects, achievements, and contributions to Nepal's renewable energy landscape.
            </p>
          </div>

          {/* GRID */}
          <div className="grid threeGrid gap-8">
            {blogData.map((blog, index) => (
              <div
                key={blog.id}
                onClick={() => openBlog(blog)}
                className={` group bg-white dark:bg-[#0f172a] rounded-[2rem] overflow-hidden shadow-lg border border-slate-100 dark:border-slate-800 cursor-pointer ${
                  index === 1 ? "delay-100" : index === 2 ? "delay-200" : ""
                }`}
              >
                <div className="h-60 overflow-hidden">
                  <img
                    src={blog.cover_image}
                    className="w-full h-full  group-hover:scale-110 transition-transform duration-500 ease-in-out"
                    alt=""
                  />
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-2 text-slate-400 text-sm mb-3">
                    <FontAwesomeIcon icon={faCalendar} />
                    {formatDate(blog.created_at)}
                  </div>

                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4 line-clamp-2">
                    {blog.title}
                  </h3>

                  <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 line-clamp-3">
                    {stripHTML(blog.content)}
                  </p>

                  <span className="text-blue-500 font-bold text-sm flex items-center gap-2 group-hover:gap-4 transition-all">
                    Read More <FontAwesomeIcon icon={faArrowRight} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG MODAL */}
      {selectedBlog && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeBlog();
          }}
        >
          <div className="bg-white dark:bg-[#0f172a] max-w-3xl w-full rounded-2xl overflow-hidden relative">
            {/* Close */}
            <button
              onClick={closeBlog}
              className="absolute top-4 right-4 text-xl text-white z-10"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>

            <img
              src={selectedBlog.cover_image}
              className="w-full h-64 object-cover"
              alt=""
            />

            <div className="p-6 overflow-y-auto max-h-[70vh]">
              <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                {selectedBlog.title}
              </h2>

              <div
                className="text-slate-600 dark:text-slate-300 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NewsBlog;