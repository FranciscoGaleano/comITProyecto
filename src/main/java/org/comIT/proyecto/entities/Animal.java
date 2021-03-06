package org.comIT.proyecto.entities;

public abstract class Animal {
	
	protected String nombre;
	protected int cantidadPatas;
	protected boolean tienePlumas;
	protected User duenyo;

	public User getDuenyo() {
		return duenyo;
	}

	public void setDuenyo(User duenyo) {
		this.duenyo = duenyo;
	}

	public int getCantidadPatas() {
		return cantidadPatas;
	}

	public void perderPata() {
		if(cantidadPatas > 0) {
			cantidadPatas--;			
		}
	}
	
	public boolean isTienePlumas() {
		return tienePlumas;
	}
	
	public String getNombre() {
		return nombre;
	}

	public abstract String emitirSonido();

}
