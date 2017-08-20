#Platzom
PLatzom es un idioma inventado para el [curso de fundamentos de JavaScript](https://platzi.com/js) de platzi

## Descripcion del idioma
- Si la palabra termina en "ar", se le quitan esas dos leteas
- Si la palara inicia con Z, se le añade  "pe" al final
- si la palara traducida tiene 10 letras o mas, se debe partir en dos por la mitad y unir con un guion en medio
- Si la palabra original es un palindoromo, se ignoran las reglas anteriores  se devuelve la misma palabra pero intercalando mayusculas y minusculas

## Instalacion
```
npm install platzom
```

## Uso
```
import platzom from 'platzom'
platzom("programar") // program
platzom("Zorro") // Zorrope
platzom("abecedario") // abece-dario
platzom("sometemos") // SoMeTeMos
```

## Creditos
- Daniel Torres

## Licencia
[MIT](https://opensource.org/licenses/MIT)
