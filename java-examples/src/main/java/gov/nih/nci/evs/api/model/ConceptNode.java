package gov.nih.nci.evs.api.model;

public class ConceptNode {
	private int idx;
	private String label;
	private String code;

	public ConceptNode() {
	}

	public ConceptNode(int idx, String label, String code) {

		this.idx = idx;
		this.label = label;
		this.code = code;
	}

	public void setIdx(int idx) {
		this.idx = idx;
	}

	public void setLabel(String label) {
		this.label = label;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public int getIdx() {
		return this.idx;
	}

	public String getLabel() {
		return this.label;
	}

	public String getCode() {
		return this.code;
	}
}
