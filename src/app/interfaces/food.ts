// Interface para representar um alimento
export interface IFood {
    id: number; // Identificador do alimento
    categoriaAlimentos: string; // Categoria do alimento
    energiaKcal: number | string; // Energia em kcal (calorias)
    energiaKg: number | string; // Energia em kJ (quilojoules)
    proteina: number | string; // Quantidade de proteína
    carboidrato: number | string; // Quantidade de carboidrato
    lipidios: number | string; // Quantidade de lipídios (gorduras)
    colesterol: number | string; // Quantidade de colesterol
    descricao: string; // Descrição do alimento
    imagem: string; // URL da imagem do alimento
}
