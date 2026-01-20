const CELL_SIZE = 40;

// MAIN HALL
// Definición de la habitación Main Hall (Gran Salón)
const MAIN_HALL = {
  id: "mainHall",
  type: 9,
  cells: [
    {x:25,y:13},{x:26,y:13},{x:27,y:13},{x:28,y:13},{x:29,y:13},
    {x:25,y:14},{x:26,y:14},{x:27,y:14},{x:28,y:14},{x:29,y:14},
    {x:25,y:15},{x:26,y:15},{x:27,y:15},{x:28,y:15},{x:29,y:15},
    {x:26,y:16},{x:27,y:16},{x:28,y:16}
  ],
  doors: [
    { x:25, y:13, connectsTo:"path", entryX:24, entryY:13 },
    { x:27, y:13, connectsTo:"path", entryX:27, entryY:12 },
    { x:29, y:13, connectsTo:"path", entryX:29, entryY:12 },
    { x:29, y:15, connectsTo:"path", entryX:30, entryY:15 }
  ]
};

// ROOM ENTITY
// Clase para representar una habitación en el dungeon
class RoomEntity {
  constructor({id, type, cells, doors}) {
    this.id = id;
    this.type = type;
    this.cells = cells;
    this.doors = doors;
  }

  // Verificar si las coordenadas están dentro de la habitación, c = cell
  contains(x, y) {
    return this.cells.some(c => c.x === x && c.y === y); 
  }

  // Verificar si las coordenadas corresponden a una puerta, d = door
  isDoor(x, y) {
    return this.doors.find(d => d.x === x && d.y === y);
  }
}

// DUNGEON
// Clase principal para manejar el dungeon y sus interacciones
class Dungeon {
  constructor(board) {
    this.board = board;
    this.mainHall = new RoomEntity(MAIN_HALL);
    this.initEvents();
  }

  // Convertir coordenadas de píxeles a matriz
  toMatrix(px, py) {
    return { x: Math.floor(px / CELL_SIZE), y: Math.floor(py / CELL_SIZE) };
  }

  // Verificar si las coordenadas están en Main Hall
  isInMainHall(x, y) {
    return this.mainHall.contains(x, y);
  }

  // Inicializar eventos para que el tablero responda a clics
  initEvents() {
    // Ya iremos añadiendo
  }
}

// INICIO
// Inicializar el dungeon cuando la ventana carga
window.onload = () => {
  const board = document.getElementById("board");
  window.dungeon = new Dungeon(board);
};
