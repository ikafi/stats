package fi.gosu.ika.stats.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.data.jpa.domain.AbstractPersistable;

import javax.persistence.Entity;

/**
 * Town Class
 *
 * @author Joppe151617
 * @since 0.1.0
 */
@Entity
public class Town extends AbstractPersistable<Long> {

    private Long townId;
    private int wallLvl;
    private int warehouseLvl;

    public Long getTownId() {
        return townId;
    }

    public int getWallLvl() {
        return wallLvl;
    }

    public int getWarehouseLvl() {
        return warehouseLvl;
    }


    public void setTownId(Long townId) {
        this.townId = townId;
    }

    public void setWallLvl(int wallLvl) {
        this.wallLvl = wallLvl;
    }

    public void setWarehouseLvl(int warehouseLvl) {
        this.warehouseLvl = warehouseLvl;
    }

    @JsonIgnore
    @Override
    public boolean isNew() {
        return super.isNew();
    }
}