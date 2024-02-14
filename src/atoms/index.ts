import { Box } from './box';
import { Button } from './button';
import { Card } from './card';
import { Input } from './input';
import { Overlay, OverlayInteract } from './overlay';
import { Text } from './text';

export const sidanAtoms = (styled: any) => ({
    Box: Box(styled),
    Card: Card(styled),
    Button: Button(styled),
    Input: Input(styled),
    Overlay: Overlay(styled),
    OverlayInteract: OverlayInteract(styled),
    Text: Text(styled),
});
