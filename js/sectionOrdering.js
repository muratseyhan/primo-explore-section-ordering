angular.module('viewCustom').service('sectionOrdering', function() {

  /**
   *  Reorder the sections in the full view.
   *  @param {Array} sections - An array of section objects.  
   *  @throws {Error} If the fullview sections cannot be found.  
   */
  this.orderSections = function(sections) {
    if (!sections || !sections.length || !(sections.length > 0))
      throw new Error('Section Ordering: Full view sections could not be found.');

    // moveToBottomIfExists('links', sections);
    moveToBottomIfExists('details', sections);
  };

  function moveToBottomIfExists(sectionId, sections) {
    let section = sections.find(function(s) {
      return s.scrollId === sectionId;
    });
    if (section)
      moveToBottom(section, sections);
  }

  function moveToBottom(section, sections) {
    // Remove the section.
    sections.splice(sections.indexOf(section), 1);
    // Append the section to the end.
    sections.splice(sections.length, 0, section);
  }

});