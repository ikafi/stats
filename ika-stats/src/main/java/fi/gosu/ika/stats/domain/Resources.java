package fi.gosu.ika.stats.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.data.jpa.domain.AbstractPersistable;

import javax.persistence.Entity;

/**
 * .
 *
 * @author Ville Nupponen
 * @since 0.1.0
 */
@Entity
public class Resources extends AbstractPersistable<Long> {

    private int wood;
    private int wine;
    private int marble;
    private int crystal;
    private int sulphur;
    private int gold;

    public Resources() {
        this.wood = 0;
        this.wine = 0;
        this.marble = 0;
        this.crystal = 0;
        this.sulphur = 0;
        this.gold = 0;
    }

    public int getWood() {
        return wood;
    }
    public int getWine() {
        return wine;
    }
    public int getMarble() {
        return marble;
    }
    public int getCrystal() {
        return crystal;
    }
    public int getSulphur() {
        return sulphur;
    }
    public int getGold() {
        return gold;
    }

    public void setWood(int wood) {
        this.wood = wood;
    }
    public void setWine(int wine) {
        this.wine = wine;
    }
    public void setMarble(int marble) {
        this.marble = marble;
    }
    public void setCrystal(int crystal) {
        this.crystal = crystal;
    }
    public void setSulphur(int sulphur) {
        this.sulphur = sulphur;
    }
    public void setGold(int gold) {
        this.gold = gold;
    }

    @JsonIgnore
    @Override
    public boolean isNew() {
        return super.isNew();
    }
}
