const makeInput = (text, type, label = document.createElement('label'), input = document.createElement('input'), span = document.createElement('span')) => {
  const element = {
    label,
    input,
    span,
  };

  element.input.setAttribute('type', type);
  element.label.textContent = text;
  element.span.setAttribute('Id', `warning${type}`);
  element.input.setAttribute('required', '');
  element.label.appendChild(element.input);
  element.label.appendChild(span);
  element.label.style.display = 'flex';
  element.label.style.flexDirection = 'column';

  return { ...element };
};

const makeSelect = ([...values], text, type, input = document.createElement('select'), label = document.createElement('label'), span = document.createElement('span')) => {
  const element = {
    input,
    label,
    span,
  };
  values.forEach((thing) => {
    const option = document.createElement('option');
    option.textContent = thing;
    input.appendChild(option);
  });

  element.input.setAttribute('type', element.type);
  element.label.textContent = text;
  element.span.setAttribute('Id', `warning${type}`);
  element.input.setAttribute('required', '');
  element.label.appendChild(element.input);
  element.label.appendChild(span);
  element.label.style.display = 'flex';
  element.label.style.flexDirection = 'column';

  return { ...element };
};

export { makeInput, makeSelect };
