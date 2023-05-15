import { useState, useEffect } from "react";

function App() {
  const [theme, setTheme] = useState(false);

  // Check if browser theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    if(!localStorage.getItem('theme')){
      setTheme(event.matches);
    }
  });

  // Toggle theme handler
  const toggleThemeHandler = () => {
    setTheme((state) => {
      if(state){
        localStorage.setItem('theme', 'light');
      }else{
        localStorage.setItem('theme', 'dark');
      }
      return !state;
    });
  };

  // Set the theme upon load
  useEffect(() => {
    if(localStorage.getItem('theme')){
      setTheme(localStorage.getItem('theme') === 'dark');
    }else{
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme(true);
      }
    }
  }, []);

  // Set class to body tag
  if(theme){
    document.body.classList.add('dark-theme');
  }else{
    document.body.classList.remove('dark-theme');
  }

  return (
    <div>
      <h1>My website page</h1>
      <button onClick={toggleThemeHandler}>{theme ? 'Disable' : 'Enable'} Dark Theme</button>
      <p>
        Quisque velit posuere sed enim torquent. Aenean purus taciti felis
        dapibus condimentum. Felis vulputate mauris, ac interdum mi tempus
        torquent praesent. Quisque facilisis habitant imperdiet ante congue urna
        iaculis quisque, sit pellentesque. Nullam amet mi consequat, vitae
        sociosqu pulvinar orci! Lorem mauris hendrerit vitae feugiat nostra
        convallis, dui adipiscing. Volutpat morbi potenti amet sem.
      </p>
      <p>
        Ultrices pellentesque imperdiet senectus. Nascetur senectus faucibus mus
        lectus fames amet sociosqu morbi mus venenatis gravida curae;. Leo orci
        tempor aptent hendrerit sagittis! Habitasse proin taciti velit malesuada
        non nostra facilisis? Eget cursus cras fames sapien lectus nam aenean
        montes pretium augue. Venenatis arcu ac lacus praesent quam. Pretium
        sociosqu cursus imperdiet amet aptent mattis enim habitant donec porta
        amet. Dictum ullamcorper dis arcu facilisi volutpat, curabitur donec
        senectus penatibus himenaeos parturient. Sociis, primis.
      </p>
      <p>
        Suscipit dapibus mauris donec consequat dictumst. Maecenas aliquet
        semper auctor. Nam vel amet habitasse, commodo sed quam molestie pretium
        fermentum cras? Eros pellentesque hendrerit montes. Ligula tortor
        ultrices gravida mus sit laoreet nam auctor donec cras nunc. Hendrerit
        per malesuada elit adipiscing? Class est primis molestie montes. Iaculis
        egestas nulla per. Velit orci varius netus blandit nisi! Condimentum
        praesent dignissim dictumst ut augue in. Dignissim morbi netus praesent
        sagittis luctus odio fermentum nec quis cubilia. Mus feugiat iaculis cum
        hendrerit. Sociosqu auctor facilisi eleifend, inceptos platea. Augue
        pharetra?
      </p>
      <p>
        Vulputate tellus parturient vulputate vel condimentum nulla lectus. Orci
        lacus eros lectus lectus vitae ultricies. Varius sociis eleifend rhoncus
        ornare imperdiet. Erat fermentum erat blandit dis nam semper varius.
        Habitasse nisl quis faucibus conubia maecenas ante, congue mollis.
        Mauris nisl cursus aptent sem nascetur nascetur fusce auctor, congue
        parturient maecenas hendrerit! Id senectus rhoncus platea id mollis sit
        adipiscing pharetra faucibus dis mattis morbi. Neque suspendisse lacinia
        curabitur. Ut vulputate sem rhoncus consequat. Curae; sapien lacus
        venenatis feugiat. Laoreet sem!
      </p>
      <p>
        Quis maecenas a commodo diam sollicitudin aptent dictum curae; iaculis!
        Mollis sapien pellentesque condimentum eleifend justo nullam. Ornare sit
        mus metus libero quis convallis fermentum. Fringilla nascetur sed erat
        euismod lacinia egestas metus metus placerat nullam. Vitae nascetur
        senectus augue vivamus ullamcorper, non rhoncus. Praesent mus in
        torquent porta leo fringilla.
      </p>
    </div>
  );
}

export default App;
