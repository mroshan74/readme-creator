import { Nav } from "@/components/Nav";
import { sectionTemplates } from "@/data/section-templates";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useEffect, useState } from "react";
import Head from "next/head";

const editor = () => {
  const [selectedSectionSlugs, setSelectedSectionSlugs] = useState([]);
  const [sectionSlugs, setSectionSlugs] = useState(
    sectionTemplates.map((t) => t.slug)
  );
  const [focusedSectionSlug, setFocusedSectionSlug] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [templates, setTemplates] = useState(sectionTemplates);
  const [showDrawer, toggleDrawer] = useState(false);
  const { backup } = useLocalStorage();

  useEffect(() => {
    if (backup) {
      setTemplates(backup);
    }
  }, [backup]);

  const getTemplate = (slug) => {
    return templates.find((t) => t.slug === slug);
  };

  useEffect(() => {
    setFocusedSectionSlug(null);
  }, []);

  useEffect(() => {
    let currentSlugList = localStorage.getItem("current-slug-list");
    if (
      currentSlugList?.indexOf("title-and-description") == -1 &&
      selectedSectionSlugs.indexOf("title-and-description") > -1
    ) {
      selectedSectionSlugs.splice(
        selectedSectionSlugs.indexOf("title-and-description"),
        1
      );
    }
    setFocusedSectionSlug(
      localStorage.getItem("current-slug-list")?.split(",")[0]
    );
    localStorage.setItem("current-slug-list", selectedSectionSlugs);
  }, [selectedSectionSlugs]);

  return (
    <div>
      <Head></Head>
      <Nav
        selectedSectionSlugs={selectedSectionSlugs}
        setShowModal={setShowModal}
        getTemplate={getTemplate}
        onMenuClick={() => {}}
        isDrawerOpen={showDrawer}
      />
    </div>
  )
}

export default editor