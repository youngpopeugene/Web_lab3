function svgHandler(event){
    event.preventDefault();
    const svg = document.querySelector('svg');
    const rect = svg.getBoundingClientRect();
    r = document.getElementById('form:value_R').value;
    console.log(r);
    x = ((event.clientX - rect.left - 150)*(r/2)/50).toFixed(2);
    console.log(x);
    y = (((-1)*(event.clientY - rect.top - 150))*(r/2)/50).toFixed(2);
    console.log(y);
    document.getElementById('form:value_X').value = x.replace(".",",");
    document.getElementById('form:value_Y').value = y.replace(".",",");
    document.getElementById('form:value_R').value = r;
    document.getElementById('form:form_button_submit').click();
}