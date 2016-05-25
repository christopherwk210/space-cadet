function toggleFancyTitle() {
  if ($('#demo-title').attr('class') === 'title') {
    $('#demo-title').attr('class', 'title-fancy');
    $('#fancy-title-class').html('"title-fancy"');
  } else if ($('#demo-title').attr('class') === 'title-fancy') {
    $('#demo-title').attr('class', 'title');
    $('#fancy-title-class').html('"title"');
  }

  if ($('#demo-title').attr('class') === 'title-inactive') {
    $('#demo-title').attr('class', 'title-fancy-inactive');
    $('#fancy-title-class').html('"title-fancy-inactive"');
  } else if ($('#demo-title').attr('class') === 'title-fancy-inactive') {
    $('#demo-title').attr('class', 'title-inactive');
    $('#fancy-title-class').html('"title-inactive"');
  }
}

function toggleTitleFocus() {
  if ($('#demo-title').attr('class') === 'title') {
    $('#demo-title').attr('class','title-inactive');
    $('#fancy-title-class').html('"title-inactive"');
  } else if ($('#demo-title').attr('class') === 'title-inactive') {
    $('#demo-title').attr('class','title');
    $('#fancy-title-class').html('"title"');
  }

  if ($('#demo-title').attr('class') === 'title-fancy') {
    $('#fancy-title-class').html('"title-fancy-inactive"');
    $('#demo-title').attr('class','title-fancy-inactive');
  } else if ($('#demo-title').attr('class') === 'title-fancy-inactive') {
    $('#fancy-title-class').html('"title-fancy"');
    $('#demo-title').attr('class','title-fancy');
  }
}
