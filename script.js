function toggleFolder(course_id) {
  const folderContent = document.getElementById(course_id);
  console.log("toggleFoler :: course_id ==> " + course_id);
  folderContent.classList.toggle("active");
}

function showFolder(course_id) {
  // Hide all content pages
  const contentPages = document.querySelectorAll(".content-page");
  contentPages.forEach((page) => page.classList.remove("active"));

  // Show the default content for the main page
  const defaultPage = document.getElementById(course_id);
  defaultPage.classList.add("active");

  // Hide all navigation folders
  const navFolders = document.querySelectorAll(".nav-child");
  navFolders.forEach((folder) => folder.classList.remove("active"));

  // Show the corresponding folder content in the left navigation bar
  const folderContent = document.getElementById(course_id);
  folderContent.classList.add("active");

  showPage(course_id, null);
}

function showPage(course_id, pageId) {
  // Hide all content pages
  const contentPages = document.querySelectorAll(".content-page");
  contentPages.forEach((page) => page.classList.remove("active"));

  // Extract the folder ID (n) and page ID (m) from the pageId (e.g., page[n]-[m])
  // const [course_id, subPageId] = pageId.split('-');

  console.log(">>>>course_id:", course_id);
  // console.log('>>>>subPageId:', subPageId);
  console.log(">>>>pageId:", pageId);

  // Show the selected content page
  if (pageId == null) pageId = "0";

  const selectedPage = document.getElementById(course_id + "-" + pageId);
  console.log(">>>>>>>>>11111 selectedPage:", selectedPage);

  if (selectedPage) {
    selectedPage.classList.add("active");
  }

  // Show the corresponding folder content in the left navigation bar
  const folderContent = document.getElementById(course_id);
  if (folderContent) {
    folderContent.classList.add("active");
  }

  // If the sub-page exists, show it by default (e.g., page[n]-1, page[n]-2, etc.)
  //   if (pageId) {
  //     const defaultSubPage = document.getElementById(`${pageId}`);
  //     if (defaultSubPage) {
  //       defaultSubPage.classList.add("active");
  //     }
  //   }
}

function toggleDropdown(course_id) {
  const folderContent = document.getElementById(course_id);
  folderContent.classList.toggle("active");

  console.log("toggleDropdown :: course_id ==> " + course_id);
  showFolder(course_id);
}


document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".nav-item");

  navItems.forEach(item => {
    item.addEventListener("click", function () {
      // Remove 'last-clicked' from all nav items
      navItems.forEach(navItem => navItem.classList.remove("last-clicked"));

      // Add 'last-clicked' to the clicked item
      this.classList.add("last-clicked");
    });
  });
});