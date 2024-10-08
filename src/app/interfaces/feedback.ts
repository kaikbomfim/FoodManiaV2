// Interface para representar um feedback do usuário
export interface IFeedback {
    id: number; // Identificador único do feedback
    text: string; // Texto do feedback fornecido pelo usuário
    rating: number; // Avaliação em uma escala de 1 a 5 estrelas
    author: string; // Nome do autor do feedback
}