/**
 * Action Types
 */

export enum PosterTypes{
    
    LOAD_REQUEST = '@poster/LOAD_REQUEST',
    LOAD_SUCESS = '@poster/LOAD_SUCESS',
    LOAD_FAILURE = '@poster/LOAD_FAILURE',
} 

/**
 * 
 * Data types
 */

export interface Poster{
    URL_IMG: String
}

/**
 * State Type
 */
export interface StatePoster{
    readonly data: Poster[],
    readonly loading: boolean,
    readonly error: boolean,
    teste: string,
}