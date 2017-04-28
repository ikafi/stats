package fi.gosu.ika.stats.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.data.jpa.domain.AbstractPersistable;

import javax.persistence.Entity;

/**
 * Unit Class
 *
 * @author Ville Nupponen
 * @since 0.1.0
 */
@Entity
public class Unit extends AbstractPersistable<Long> {

    private String name;
    private int alive;
    private int dead;

    public String getName() {
        return name;
    }
    public int getAlive() {
        return alive;
    }
    public int getDead() {
        return dead;
    }

    public void setName(String name) {
        this.name = name;
    }
    public void setAlive(int alive) {
        this.alive = alive;
    }
    public void setDead(int dead) {
        this.dead = dead;
    }

    @JsonIgnore
    @Override
    public boolean isNew() {
        return super.isNew();
    }
}
