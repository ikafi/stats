package fi.gosu.ika.stats.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.data.jpa.domain.AbstractPersistable;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;

/**
 * Troop Class
 *
 * @author Ville Nupponen
 * @since 0.1.0
 */
@Entity
public class Troop extends AbstractPersistable<Long> {
    private String owner;
    private TYPE type;
    @OneToMany
    private List<Unit> units;

    public Troop() {
        this.units = new ArrayList<>();
    }

    public String getOwner() {
        return owner;
    }
    public TYPE getType() {
        return type;
    }
    public List<Unit> getUnits() {
        return units;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }
    public void setType(TYPE type) {
        this.type = type;
    }
    public void setUnits(List<Unit> units) {
        this.units = units;
    }

    @JsonIgnore
    @Override
    public boolean isNew() {
        return super.isNew();
    }

    public enum TYPE {
        ATTACKER, DEFENDER
    }
}
